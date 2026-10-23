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
  { date:"Sep 2026", text:"Our paper <em>Concept-Level Shapley Explanations: Construction, Exact Attribution, and Cross-Model Replication</em> was accepted at <a href=\"https://www.acml-conf.org/2026/\">ACML 2026</a> in Melbourne, Australia." },

  { date:"Aug 2026", text:"Our paper <em>TRACE: Human-Centered Explanations for Audio Deepfake Detection via Perceptual Voice Traits</em> was accepted at Explains 2026, the International Conference on Explainable AI for Neural and Symbolic Methods, in Angers, France." },

  { date:"Aug 2026", text:"Our research project on trustworthy and explainable detection of synthetic media for safety-critical decision-making was accepted for funding by NRW EFRE DEFENCE. The consortium includes the University of Siegen, <a href=\"http://anymate.me\">Anymate.me</a>, Open.INC and ASEW." },

  { date:"Jul 2026", text:"Our paper <em>Human-Centered Explanations for Audio Deepfakes: Making Machine Reasoning Human-Perceptible Through Voice Traits</em> received the Best Paper Award in the Artificial Intelligence in HCI category at HCI International 2026 in Montréal, Canada.", award:true,
    links:[
      {label:"Photo 1", url:"https://drive.google.com/file/d/1_ZMadtBjCiOkshF2WHU3TvhH4yP4ArOJ/view?usp=sharing"},
      {label:"Photo 2", url:"https://drive.google.com/file/d/1J57gsgD-1sEQAlXnBlRXAWfOQ7lHy0Po/view?usp=sharing"},
      {label:"Video",   url:"https://drive.google.com/file/d/1VSQxWRNlu2qgGlEFOAhktf5RfxVe6QhF/view?usp=sharing"}
    ] },

  { date:"Jul 2026", text:"Two of our papers on human-centric actionable explanations were published at the 28th International Conference on Human-Computer Interaction (<a href=\"https://2026.hci.international/\">HCI International 2026</a>).",
    links:[
      {label:"Paper 1", url:"https://link.springer.com/chapter/10.1007/978-3-032-30849-8_10"},
      {label:"Paper 2", url:"https://link.springer.com/chapter/10.1007/978-3-032-30849-8_8"}
    ] },

  { date:"Jun 2026", text:"The University of Siegen highlighted the research outcomes of the <a href=\"https://antiscam-project.de/\">AntiScam project</a>, which I coordinate.",
    links:[
      {label:"Article", url:"https://www.uni-siegen.de/en/news/artificial-voices-real-threat"}
    ] },

  { date:"May 2026", text:"My research was featured by the University of Siegen and published through Informationsdienst Wissenschaft (idw), one of Germany’s leading science news platforms.",
    links:[
      {label:"English", url:"https://nachrichten.idw-online.de/2026/05/13/md-shajalal-researches-explainable-ai"},
      {label:"German",  url:"https://nachrichten.idw-online.de/2026/05/13/md-shajalal-forscht-zu-erklaerbarer-ki"}
    ] },

  { date:"Apr 2026", text:"I gave an invited talk, <em>Explainable and Trustworthy AI in Cybersecurity</em>, at the <a href=\"https://www.businessfactors.de/de/conferences/it-security/agenda/\">IT Security MINDS conference 2026</a> at <a href=\"https://www.althoffcollection.com/de/althoff-grandhotel-schloss-bensberg\">Althoff Grandhotel Schloss Bensberg</a>, Cologne." }
];
