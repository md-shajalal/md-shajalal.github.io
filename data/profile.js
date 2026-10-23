/* =========================================================
   PROFILE (left sidebar) and SITE SETTINGS
   Paste full links between the quotes.
   Anything left empty "" is hidden on the page.
   ========================================================= */
const PROFILE = {
  name:     "Md Shajalal, PhD",
  position: "Postdoctoral Research Fellow",
  org:      "IT Security and Consumer Computing, University of Siegen",
  location: "Siegen, Germany",
  institution: "University of Siegen",
  emails:   ["md.shajalal@uni-siegen.de", "shajalal@hstu.ac.bd"],

  photo:   "data/photo.jpeg",   // e.g. "images/photo.jpeg"
  cv:      "data/Dr_Md_Shajalal_Resume.pdf",   // e.g. "files/Md_Shajalal_CV.pdf"
  scholar: "https://scholar.google.co.jp/citations?hl=en&user=3yLkKWMAAAAJ&view_op=list_works&sortby=pubdate",   // Google Scholar profile URL
  orcid:   "",
  scopus:  "",
  wos:     "https://www.webofscience.com/wos/author/record/1983074",   // Web of Science
  dblp:    "https://dblp.uni-trier.de/pers/hd/s/Shajalal:Md",
  linkedin:"",
  github:  ""
};

/* Which sections appear, and in what order (top to bottom and in the menu).
   To hide a section, delete its line. To reorder, move the lines. */
const SECTIONS = [
  "about",
  "news",
  "publications",
  "research",
  "experience",
  "awards",
  "teaching",
  "service",
  "resources"
];
