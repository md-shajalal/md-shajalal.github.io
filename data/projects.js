/* =========================================================
   RESEARCH PROJECTS
   now:true  = shown as Current
   now:false = shown as Previous
   You can use <a href="https://...">links</a>, <em>italic</em>
   and <strong>bold</strong> inside title and text.
   ========================================================= */

/* Third-party funding, shown as a list at the top of the Research section.
   Newest or most important first. */
const FUNDING = [
  { project:"AntiScam", url:"https://antiscam-project.de/", funder:"BMFTR",
    role:"Project coordinator and research contributor", volume:"approx. €1.25M", duration:"3 years" },
  { project:"ASTRID", url:"", funder:"NRW-ERDF",
    role:"Initiator, consortium builder and research contributor", volume:"approx. €1.45M", duration:"2 years" },
  { project:"COPP", url:"", funder:"NRW-ERDF",
    role:"Proposal co-author and research contributor", volume:"approx. €3.3M", duration:"3 years" }
];

const PROJECTS = [
  { now:true,
    title:"<a href=\"https://antiscam-project.de/\">AntiScam</a>: Defending against communication fraud",
    text:"AI makes conversational fraud such as voice phishing cheaper, more personal and harder to spot, for example by imitating familiar voices. AntiScam protects consumers with a socio-technical approach: mapping AI-based scam threats, detecting synthetic-voice attacks with explainable AI, building a learning game that strengthens self-protection, and analysing legal gaps. <strong>Role:</strong> project coordinator. <strong>Funding:</strong> German Federal Ministry of Research, Technology and Space (BMFTR), approx. €1.25M, 3 years (10/2024 to 09/2027). <strong>Partners:</strong> University of Siegen (coordinator), open.INC GmbH and Bonn-Rhein-Sieg University of Applied Sciences." },

  { now:true,
    title:"ASTRID: Trustworthy and explainable detection of synthetic media",
    text:"A newly funded project. Deepfake images, video and audio increasingly reach people who must make safety-critical decisions. ASTRID develops detection methods for synthetic media that are reliable and explain their verdicts, so that decision-makers can judge when to trust them. <strong>Role:</strong> initiated the project idea and built the consortium. <strong>Funding:</strong> NRW EFRE DEFENCE, approx. €1.45M, accepted in August 2026. <strong>Partners:</strong> University of Siegen, <a href=\"http://anymate.me\">Anymate.me</a>, open.INC GmbH and ASEW." },

  { now:false,
    title:"XAI in smart domestic technology",
    text:"Explainable AI for smart home technology with a focus on user preferences, including an energy-aware, human-centric energy recommender system and explainable household energy demand forecasting. Carried out as a Marie Skłodowska-Curie Fellow at Fraunhofer FIT." },

  { now:false,
    title:"Thermal comfort preference prediction",
    text:"Personal thermal comfort matters for occupants’ well-being, health and productivity. We predicted occupants’ thermal preferences in smart homes from physiological and environmental variables, so that AI-controlled heating can adjust indoor conditions automatically." },

  { now:false,
    title:"Search result diversification",
    text:"Ignoring the information needs behind a query can misguide a search engine. This project diversified search results using coverage-based subtopic modeling, selecting documents that cover as many search intents as possible." },

  { now:false,
    title:"Query subtopic mining",
    text:"Search queries are often short, ambiguous and open to several interpretations. This project mined and diversified the subtopics that specialize or disambiguate a query’s intent." },

  { now:false,
    title:"Semantic textual similarity",
    text:"Lexical measures can’t capture similarity beyond a surface level. This project used deep learning to estimate the semantic similarity between sentences, including for Bengali." },

  { now:false,
    title:"Community question answering and retrieval",
    text:"Retrieving and ranking answers in community question answering platforms." },

  { now:false,
    title:"NTCIR shared tasks",
    text:"Participation in NTCIR-12 IMine-2 (subtopic mining for user queries) and the NTCIR-13 WWW ad hoc web search task (English)." }
];
