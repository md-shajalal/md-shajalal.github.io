/* =========================================================
   Builds the page from the files in data/.
   You shouldn’t need to edit this file.
   ========================================================= */
(function(){
const $ = (id) => document.getElementById(id);
const has = (name) => { try { return typeof window.eval(name) !== "undefined"; } catch(_) { return false; } };
const get = (name, fallback) => has(name) ? window.eval(name) : fallback;
const link = (url, label) => url ? `<a href="${url}" target="_blank" rel="noopener">${label}</a>` : "";
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const boldMe = (s) => s.replace(/Md\.? Shajalal/g, m => `<strong>${m}</strong>`);
const pairs = (arr) => arr.map(([a,b]) => `<li>${a}${b?`<span class="sub">${b}</span>`:""}</li>`).join("");
const timeline = (arr) => arr.map(x => `<li><div class="when">${x.when}</div><div class="what"><p><strong>${x.title}</strong></p><p class="sub">${x.org}</p></div></li>`).join("");

const P = get("PROFILE", {});
const ICON = {
  pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  org:'<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
  id:'<circle cx="12" cy="12" r="9"/><path d="M9 8v8M12.5 8h1.5a4 4 0 0 1 0 8h-1.5z"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
};
const icon = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
const PROFILE_LINKS = [
  ["doc","cv","Résumé (PDF)"],["cap","scholar","Google Scholar"],["id","orcid","ORCID"],
  ["link","scopus","Scopus"],["link","wos","Web of Science"],["link","dblp","DBLP"],
  ["link","linkedin","LinkedIn"],["link","github","GitHub"]
].filter(([,k]) => P[k]);

/* ---------- Sidebar ---------- */
(function(){
  const initials = (P.name || "").replace(/,.*$/,"").split(/\s+/).filter(Boolean).map(w => w[0]).slice(0,2).join("");
  const rows = [];
  if (P.location) rows.push(["pin", `<span>${P.location}</span>`]);
  if (P.institution) rows.push(["org", `<span>${P.institution}</span>`]);
  (P.emails || []).forEach(e => rows.push(["mail", `<a href="mailto:${e}">${e}</a>`]));
  PROFILE_LINKS.forEach(([i,k,l]) => rows.push([i, link(P[k], l)]));
  $("sidebar").innerHTML = `
    <div class="photo" id="portrait">${P.photo ? `<img src="${P.photo}" alt="Portrait of ${esc(P.name||"")}">` : `<span class="mono" aria-hidden="true">${initials}</span>`}</div>
    <h1>${P.name || ""}</h1>
    ${P.position ? `<p class="title">${P.position}</p>` : ""}
    ${P.org ? `<p class="org">${P.org}</p>` : ""}
    <ul class="facts">${rows.map(([k,h]) => `<li>${icon(k)}${h}</li>`).join("")}</ul>`;
  const short = (P.name || "").replace(/,.*$/,"");
  if (short){ $("brand").textContent = short; $("footerName").textContent = short; }
})();

/* ---------- Sections ---------- */
const SECTION_DEFS = {
  about: { menu:"About", render(){
    const A = get("ABOUT", null); if (!A) return null;
    return `<h2>About me</h2><div class="prose">${(A.paragraphs||[]).map(p => `<p>${p}</p>`).join("")}</div>
      ${A.interests && A.interests.length ? `<h3>Research interests</h3><ul class="chips">${A.interests.map(i => `<li>${i}</li>`).join("")}</ul>` : ""}`;
  }},
  news: { menu:"News", render(){
    if (!has("NEWS")) return null;
    return `<h2>Latest news</h2><ul class="dated" id="newsList"></ul>`;
  }, init(){
    const NEWS = get("NEWS", []);
    const render = (all) => {
      $("newsList").innerHTML = (all ? NEWS : NEWS.slice(0,5)).map(n => {
        const links = (n.links||[]).filter(l => l.url).map(l => link(l.url,l.label)).join("");
        return `<li><div class="when">${n.date}</div><div class="what"><p>${n.text}${n.award?'<span class="badge award">Award</span>':''}${links?`<span class="inline-links">${links}</span>`:''}</p></div></li>`;
      }).join("");
    };
    render(false);
    if (NEWS.length > 5){
      const b = document.createElement("button");
      b.className = "more-btn"; b.textContent = `Show all ${NEWS.length} news items`;
      b.setAttribute("aria-expanded","false");
      b.onclick = () => { const open = b.getAttribute("aria-expanded")==="true";
        render(!open); b.setAttribute("aria-expanded", String(!open));
        b.textContent = open ? `Show all ${NEWS.length} news items` : "Show fewer"; };
      $("newsList").after(b);
    }
  }},
  publications: { menu:"Publications", render(){
    if (!has("PUBS")) return null;
    const pl = PROFILE_LINKS.filter(([,k]) => k !== "cv" && k !== "linkedin" && k !== "github").map(([,k,l]) => link(P[k], l));
    const intro = pl.length ? "Full lists are also on " + pl.join(", ").replace(/, ([^,]*)$/, " and $1") + "." : "Journal articles, conference papers, book chapters and theses.";
    return `<h2>Publications</h2><p class="intro">${intro}</p>
      <div class="pub-tools">
        <div class="tabs" role="group" aria-label="Filter publications by type" id="pubTabs"></div>
        <label class="sr" for="pubTopic">Filter by research topic</label>
        <select class="topic" id="pubTopic"></select>
        <label class="sr" for="pubSearch">Search publications</label>
        <input class="search" id="pubSearch" type="search" placeholder="Search titles, authors or venues">
      </div>
      <ul class="dated" id="pubList"></ul>`;
  }, init(){
    // Sort: newest year first; within a year, journals, then conferences,
    // then book chapters, then theses. Entries without a year go last.
    // Within the same year and type, the order in publications.js is kept.
    const TYPE_ORDER = { journal:0, conference:1, chapter:2, thesis:3 };
    const PUBS = get("PUBS", [])
      .map((p, i) => ({ p, i }))
      .sort((a, b) => {
        const ya = parseInt(a.p.year, 10) || 0, yb = parseInt(b.p.year, 10) || 0;
        if (ya !== yb) return yb - ya;
        const ta = TYPE_ORDER[a.p.type] ?? 9, tb = TYPE_ORDER[b.p.type] ?? 9;
        if (ta !== tb) return ta - tb;
        return a.i - b.i;
      })
      .map(x => x.p);
    const types = [["all","All"],["journal","Journals"],["conference","Conferences"],["chapter","Book chapters"],["thesis","Theses"]]
      .filter(([k]) => k === "all" || PUBS.some(p => p.type === k));
    let current = "all", q = "", topic = "all";
    const TOPICS = get("TOPICS", {});
    const inTopic = p => topic === "all" || (p.topics || []).includes(topic);
    const count = t => PUBS.filter(p => inTopic(p) && (t === "all" || p.type === t)).length;
    const drawTabs = () => {
      $("pubTabs").innerHTML = types.map(([k,l]) =>
        `<button class="tab" data-type="${k}" aria-pressed="${k===current}">${l}<span class="n">${count(k)}</span></button>`).join("");
    };
    drawTabs();
    const tkeys = Object.keys(TOPICS).filter(k => PUBS.some(p => (p.topics || []).includes(k)));
    if (tkeys.length){
      $("pubTopic").innerHTML = `<option value="all">All topics</option>` +
        tkeys.map(k => `<option value="${k}">${TOPICS[k]} (${PUBS.filter(p => (p.topics||[]).includes(k)).length})</option>`).join("");
    } else {
      $("pubTopic").style.display = "none";
    }
    const render = () => {
      const needle = q.trim().toLowerCase();
      const list = PUBS.filter(p => inTopic(p) && (current==="all"||p.type===current) &&
        (!needle || (p.title+" "+p.authors+" "+p.venue).toLowerCase().includes(needle)));
      if (!list.length){ $("pubList").innerHTML = `<li class="empty" style="display:block">${q ? `No publications match “${esc(q)}”.` : "No publications in this combination."} Try a different word, topic or tab.</li>`; return; }
      $("pubList").innerHTML = list.map(p => {
        const badges = (p.award?`<span class="badge award">${p.award}</span>`:"") + (p.status?`<span class="badge status">${p.status}</span>`:"");
        return `<li class="pub"><div class="when">${p.year || ""}</div><div class="what">
          <div class="title">${p.title}${badges}</div>
          <div class="authors">${boldMe(p.authors)}</div>
          <div class="venue">${p.venue}${p.note?` <span class="note">(${p.note})</span>`:""}${p.pdf?`<span class="inline-links">${link(p.pdf,"PDF")}</span>`:""}</div>
        </div></li>`;
      }).join("");
    };
    $("pubTabs").addEventListener("click", e => {
      const b = e.target.closest(".tab"); if (!b) return;
      current = b.dataset.type;
      document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-pressed", String(t===b)));
      render();
    });
    $("pubTopic").addEventListener("change", e => { topic = e.target.value; drawTabs(); render(); });
    $("pubSearch").addEventListener("input", e => { q = e.target.value; render(); });
    render();
  }},
  research: { menu:"Research", render(){
    const PR = get("PROJECTS", null); if (!PR) return null;
    return `<h2>Research projects</h2><div class="projects">${PR.map(p =>
      `<div class="project ${p.now?'':'past'}"><div class="status">${p.now?'Current':'Previous'}</div><h4>${p.title}</h4><p>${p.text}</p></div>`).join("")}</div>`;
  }},
  experience: { menu:"Experience", render(){
    const E = get("EXPERIENCE", []), ED = get("EDUCATION", []), LA = get("LANGUAGES", []);
    if (!E.length && !ED.length) return null;
    return `<h2>Experience</h2>${E.length?`<ul class="dated">${timeline(E)}</ul>`:""}
      ${ED.length?`<h3>Education</h3><ul class="dated">${timeline(ED)}</ul>`:""}
      ${LA.length?`<h3>Languages</h3><ul class="plain cols">${pairs(LA)}</ul>`:""}`;
  }},
  awards: { menu:"Awards", render(){
    const AW = get("AWARDS", []), SC = get("SCHOLARSHIPS", []);
    if (!AW.length && !SC.length) return null;
    return `<h2>Awards and scholarships</h2>${AW.length?`<ul class="dated">${timeline(AW)}</ul>`:""}
      ${SC.length?`<h3>Scholarships</h3><ul class="plain">${SC.map(s => `<li><strong>${s.title}</strong><span class="sub">${s.org}</span></li>`).join("")}</ul>`:""}`;
  }},
  teaching: { menu:"Teaching", render(){
    const C = get("COURSES", []), S = get("STUDENTS", []);
    if (!C.length && !S.length) return null;
    const N = get("TEACHING_NOTE", "");
    return `<h2>Teaching</h2>${N?`<div class="prose"><p>${N}</p></div>`:""}${C.length?`<h3>Courses taught</h3><ul class="plain cols">${pairs(C)}</ul>`:""}
      ${S.length?`<h3>Supervised students</h3><ul class="plain cols">${pairs(S)}</ul>`:""}`;
  }},
  service: { menu:"Service", render(){
    const PC = get("PC", []), RV = get("REVIEWS", []), T = get("TALKS", []);
    if (!PC.length && !RV.length && !T.length) return null;
    return `<h2>Service and talks</h2>
      ${PC.length?`<h3>Program committees</h3><ul class="plain">${pairs(PC)}</ul>`:""}
      ${RV.length?`<h3>Reviewing</h3><ul class="plain cols">${pairs(RV)}</ul>`:""}
      ${T.length?`<h3>Talks and presentations</h3><ul class="plain">${T.map(t => `<li>${t.title}${t.slides?`<span class="inline-links">${link(t.slides,"Slides")}</span>`:""}<span class="sub">${t.where}</span></li>`).join("")}</ul>`:""}`;
  }},
  resources: { menu:"Resources", render(){
    const D = get("DATASET", null), R = get("RESOURCES", []);
    if (!D && !R.length) return null;
    const dl = D && (D.datasetUrl || D.paperUrl) ? `<span class="inline-links">${link(D.datasetUrl,"Download dataset")}${link(D.paperUrl,"Read the paper")}</span>` : "";
    return `<h2>Resources</h2>
      ${D?`<div class="callout"><h3 style="margin-top:0">${D.title}</h3>${D.paragraphs.map((p,i,a) => `<p>${p}${i===a.length-1?dl:""}</p>`).join("")}</div>`:""}
      ${R.map(g => `<h3>${g.group}</h3><ul class="plain">${g.items.map(i => `<li>${i.url?link(i.url,i.name):i.name}</li>`).join("")}</ul>`).join("")}`;
  }}
};

const order = get("SECTIONS", Object.keys(SECTION_DEFS)).filter(k => SECTION_DEFS[k]);
const built = [];
let html = "";
order.forEach(key => {
  try {
    const out = SECTION_DEFS[key].render();
    if (out){ html += `<section class="block" id="${key}">${out}</section>`; built.push(key); }
  } catch(err){ console.error(`Section "${key}" could not be built:`, err); }
});
if (!built.length) html = `<p class="empty">No content found. Check that the data/ folder was uploaded next to index.html.</p>`;
$("content").innerHTML = html;
built.forEach(key => { try { SECTION_DEFS[key].init && SECTION_DEFS[key].init(); } catch(err){ console.error(err); } });
$("menu").innerHTML = built.map(k => `<a href="#${k}">${SECTION_DEFS[k].menu}</a>`).join("");
$("year").textContent = new Date().getFullYear();

/* ---------- Menu: scroll to sections and highlight the current one ---------- */
(function(){
  const nav = $("menu"), header = document.querySelector("header.top");
  const links = [...nav.querySelectorAll("a")];
  const sections = built.map(k => $(k));
  if (!sections.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lock = 0;
  const btn = $("menuBtn");
  const closeMenu = () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded","false"); };
  btn.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  document.addEventListener("click", e => { if (!e.target.closest("header.top")) closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 900) closeMenu(); });
  const setActive = (id) => {
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
    const a = nav.querySelector(".active");
    if (a && !nav.classList.contains("open") && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = Math.max(0, a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2);
  };
  const goTo = (id, smooth) => {
    const el = $(id); if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight - 16;
    lock = Date.now() + 900;
    window.scrollTo({ top: Math.max(0, y), behavior: (smooth && !reduce) ? "smooth" : "auto" });
    setActive(id);
  };
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (id === "top"){ e.preventDefault(); lock = Date.now() + 900; window.scrollTo({top:0, behavior: reduce ? "auto" : "smooth"}); setActive(built[0]); return; }
    if (!$(id)) return;
    e.preventDefault(); closeMenu(); goTo(id, true);
    try { history.replaceState(null, "", "#" + id); } catch(_) {}
  });
  const onScroll = () => {
    if (Date.now() < lock) return;
    const line = header.offsetHeight + window.innerHeight * 0.3;
    let current = sections[0].id;
    for (const s of sections){ if (s.getBoundingClientRect().top <= line) current = s.id; }
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 4) current = sections[sections.length-1].id;
    setActive(current);
  };
  let ticking = false;
  window.addEventListener("scroll", () => { if (!ticking){ ticking = true; requestAnimationFrame(() => { onScroll(); ticking = false; }); } }, { passive:true });
  if (location.hash && $(location.hash.slice(1))) setTimeout(() => goTo(location.hash.slice(1), false), 50);
  else onScroll();
})();
})();
