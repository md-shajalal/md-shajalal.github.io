/* =========================================================
   SERVICE AND TALKS
   PC and REVIEWS lines are ["Name", "Detail"].
   You can put a link inside the name: <a href="https://...">Name</a>
   TALKS: add slides:"https://..." to show a Slides link.
   ========================================================= */

const PC = [
  ["<a href=\"https://xai.kaist.ac.kr/Workshop/hcai2025/\">Human-centric AI: From Explainability and Trustworthiness to Actionable Ethics</a>",
   "Workshop co-located with <a href=\"https://cikm2025.org/\">ACM CIKM 2025</a>, Seoul, South Korea"],
  ["3rd World Conference on Explainable Artificial Intelligence (<a href=\"https://xaiworldconference.com/2025/\">xAI 2025</a>)",
   "Istanbul, Turkey"],
  ["40th ACM/SIGAPP Symposium on Applied Computing (<a href=\"https://www.sigapp.org/sac/sac2025/\">ACM SAC 2025</a>)",
   "Tracks: <a href=\"https://sites.google.com/view/sac-scci-2025/home\">Smart Cities and Critical Infrastructures (SCCI)</a> and <a href=\"https://sites.google.com/view/acm-sac-mla-2025\">Machine Learning and its Applications (MLA)</a>"],
  ["2nd World Conference on Explainable Artificial Intelligence (<a href=\"https://xaiworldconference.com/2024/\">xAI 2024</a>)",
   "Malta"],
  ["39th ACM/SIGAPP Symposium on Applied Computing (<a href=\"https://www.sigapp.org/sac/sac2024/\">ACM SAC 2024</a>)",
   ""],
  ["10th International Conference on Behavioral and Social Computing (<a href=\"http://besc-conf.org/2023/\">BESC 2023</a>)",
   "Larnaca, Cyprus"],
  ["<a href=\"http://icaict.uiu.ac.bd/\">IEEE ICAICT</a>",
   "IEEE, Scopus"]
];

const REVIEWS = [
  ["ACM CHI 2026", "Barcelona, Spain"],
  ["<a href=\"https://cis.ieee.org/publications/ieee-transactions-on-artificial-intelligence\">IEEE Transactions on Artificial Intelligence</a>", "IEEE"],
  ["<a href=\"https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=91\">IEEE Transactions on Fuzzy Systems</a>", "IEEE, Q1"],
  ["Technological Forecasting and Social Change", "Elsevier, Q1"],
  ["Decision Support Systems", "Elsevier, Q1"],
  ["Knowledge and Information Systems", "Springer, Q1"],
  ["International Journal of Information Technology & Decision Making", "World Scientific, Q1"],
  ["<a href=\"https://www.springer.com/journal/13748\">Progress in Artificial Intelligence</a>", "Springer"],
  ["<a href=\"https://onlinelibrary.wiley.com/journal/15320634\">Concurrency and Computation: Practice and Experience</a>", "Wiley"],
  ["<a href=\"https://onlinelibrary.wiley.com/journal/14680394\">Expert Systems</a>", "Wiley"],
  ["<a href=\"https://www.worldscientific.com/worldscinet/apjor\">Asia-Pacific Journal of Operational Research</a>", "World Scientific"],
  ["<a href=\"https://ieeeaccess.ieee.org/\">IEEE Access</a>", "IEEE"],
  ["57th Hawaii International Conference on System Sciences (<a href=\"https://hicss.hawaii.edu/\">HICSS</a>)", "Hawaii, USA"],
  ["<a href=\"https://2022.ecmlpkdd.org/\">ECML PKDD 2023</a>", "Grenoble, France"],
  ["<a href=\"https://www.cuet.ac.bd/ecce/\">IEEE ECCE</a> Conference", "IEEE"]
];

const TALKS = [
  { title:"Invited talk: Explainable and Trustworthy AI in Cybersecurity",
    where:"<a href=\"https://www.businessfactors.de/de/conferences/it-security/agenda/\">IT Security MINDS 2026</a>, Schloss Bensberg, Cologne" },
  { title:"Lecture: The Building Blocks of Neural Networks and Explainability",
    where:"Two-hour talk at a summer school organized by Bonn-Rhein-Sieg University of Applied Sciences, Germany, for participants from universities across several countries" },
  { title:"10th IEEE International Conference on Data Science and Advanced Analytics (<a href=\"https://conferences.sigappfr.org/dsaa2023/\">DSAA 2023</a>)",
    where:"Thessaloniki, Greece, October 2023" },
  { title:"1st World Conference on Explainable Artificial Intelligence (<a href=\"https://xaiworldconference.com/\">xAI 2023</a>)",
    where:"Lisbon, Portugal, July 2023" },
  { title:"International Conference on Speech and Language Technologies (SPELLL 2022)",
    where:"India",
    slides:"https://drive.google.com/file/d/1lgOoGC_W9TQstKrqqHC2JnAewORLYBwX/view?usp=sharing" },
  { title:"9th ACM International Conference on Systems for Energy-Efficient Built Environments (ACM BuildSys 2022)",
    where:"Boston, USA",
    slides:"" },
  { title:"13th ACM International Conference on Future Energy Systems (ACM e-Energy 2022)",
    where:"USA",
    slides:"https://drive.google.com/file/d/19NKPLLc3eT_zhaDBiYQsdjxRdD98nV2L/view?usp=sharing" },
  { title:"International Conference on Cyber Security and Computer Science (ICONCS 2020)",
    where:"Bangladesh",
    slides:"https://drive.google.com/open?id=19Pl-YiA0_x8CpG_XKSBdqmfFPqsOs06r" },
  { title:"IEEE International Conference on Electrical and Computer Engineering (IEEE ICECE 2018)",
    where:"BUET, Dhaka, Bangladesh",
    slides:"https://drive.google.com/file/d/1PjiCPdmLmibmzPNJMin-iAWFis5le0Pq/view?usp=sharing" },
  { title:"IEEE International Conference on Bangla Speech and Language Processing (IEEE ICBSLP 2018)",
    where:"SUST, Sylhet, Bangladesh",
    slides:"https://drive.google.com/file/d/1isz-QZ5EDjSixlbzKEns0bh3qoUDN1R4/view?usp=sharing" },
  { title:"IEEE International Conference on Advanced Informatics: Concepts, Theory and Application (IEEE ICAICTA 2016)",
    where:"Penang, Malaysia",
    slides:"https://drive.google.com/file/d/0B0UjtX95ykBudzZvVng3a3VsNVE/view?usp=sharing" },
  { title:"NTCIR-12 IMine-2 task",
    where:"12th NTCIR Conference, National Institute of Informatics, Tokyo, Japan",
    slides:"https://drive.google.com/file/d/0B0UjtX95ykBuUVNTWk1MNmdiMHM/view?usp=sharing" },
  { title:"NTCIR-12 Temporalia task",
    where:"12th NTCIR Conference, National Institute of Informatics, Tokyo, Japan",
    slides:"https://drive.google.com/file/d/0B0UjtX95ykBuMzZzZllnelI5OVE/view?usp=sharing" }
];
