/* =========================================================
   NEWS
   Add a new item at the TOP of the list. Copy this pattern:

   { date:"Oct 2026", text:"What happened. Use <em>…</em> for paper titles.",
     links:[ {label:"Paper", url:"https://..."} ] },

   Optional: award:true shows a small Award badge.
   The first 5 items show by default; the rest appear under
   “Show all news items”.
   ========================================================= */

const NEWS = [
  { date:"Sep 2026", text:"Our paper <em>Concept-Level Shapley Explanations: Construction, Exact Attribution, and Cross-Model Replication</em> was accepted at ACML 2026 in Melbourne, Australia." },
  { date:"Aug 2026", text:"Our paper <em>TRACE: Human-Centered Explanations for Audio Deepfake Detection via Perceptual Voice Traits</em> was accepted at Explains 2026, the International Conference on Explainable AI for Neural and Symbolic Methods, in Angers, France." },
  { date:"Aug 2026", text:"Our research project on trustworthy and explainable detection of synthetic media for safety-critical decision-making was accepted for funding by NRW EFRE DEFENCE. The consortium includes the University of Siegen, Anymate.me, Open.INC and ASEW." },
  { date:"Jul 2026", text:"Our paper <em>Human-Centered Explanations for Audio Deepfakes: Making Machine Reasoning Human-Perceptible Through Voice Traits</em> received the Best Paper Award in the Artificial Intelligence in HCI category at HCI International 2026 in Montréal, Canada.", award:true,
    links:[{label:"Photo 1",url:""},{label:"Photo 2",url:""},{label:"Video",url:""}] },
  { date:"Jul 2026", text:"Two of our papers on human-centric actionable explanations were published at the 28th International Conference on Human-Computer Interaction (HCI International 2026).",
    links:[{label:"Paper 1",url:""},{label:"Paper 2",url:""}] },
  { date:"Jun 2026", text:"The University of Siegen highlighted the research outcomes of the AntiScam project, which I coordinate.", links:[{label:"Article",url:""}] },
  { date:"May 2026", text:"My research was featured by the University of Siegen and published through Informationsdienst Wissenschaft (idw), one of Germany’s leading science news platforms.",
    links:[{label:"English",url:""},{label:"German",url:""}] },
  { date:"Apr 2026", text:"I gave an invited talk, <em>Explainable and Trustworthy AI in Cybersecurity</em>, at the IT Security MINDS conference 2026 at Althoff Grandhotel Schloss Bensberg, Cologne." }
];
