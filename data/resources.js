/* =========================================================
   RESOURCES
   Add url:"https://..." to make any item a clickable link.
   ========================================================= */

const DATASET = {
  title: "Bengali Semantic Textual Similarity (STS) dataset",
  paragraphs: [
    "Measuring textual similarity is central to many retrieval and NLP applications, including summarization, machine translation, plagiarism detection, sentiment analysis, relevance feedback and subtopic mining.",
    "<strong>Task.</strong> Given two Bengali sentences, a method returns a continuous similarity score from 0 to 5, where 0 means the sentences are semantically independent and 5 means they are equivalent. Performance is measured by the Pearson correlation between system scores and human judgments.",
    "Details are in our paper <em>Semantic Textual Similarity in Bengali Text</em> (IEEE ICBSLP 2018). If you use this dataset, please cite it."
  ],
  datasetUrl: "",   // download link
  paperUrl:   ""    // paper link
};

const RESOURCES = [
  { group:"Information retrieval", items:[
    {name:"Information retrieval resources, Stanford University",url:""},
    {name:"Resources from ACM SIGIR",url:""},
    {name:"Information retrieval resources, University of Maryland",url:""},
    {name:"Text REtrieval Conference (TREC)",url:""},
    {name:"NII test collections for IR systems (NTCIR)",url:""} ]},
  { group:"Web search, ad hoc and diversified", items:[
    {name:"TREC Web Track guidelines and data, 2009–2013",url:""},
    {name:"ClueWeb09 document collection",url:""},
    {name:"ClueWeb12 document collection",url:""},
    {name:"NTCIR-13 WWW",url:""} ]},
  { group:"Diversified subtopic mining", items:[
    {name:"NTCIR-10 INTENT",url:""},{name:"NTCIR-11 IMine-1",url:""},{name:"NTCIR-12 IMine-2",url:""} ]},
  { group:"Natural language processing", items:[
    {name:"Natural language processing with deep learning",url:""},
    {name:"NLP tasks and selected references",url:""},
    {name:"Deep learning applications for NLP",url:""},
    {name:"CNNs for natural language processing",url:""},
    {name:"NLTK corpora",url:""} ]},
  { group:"Sentiment analysis", items:[
    {name:"Sentiment classification datasets: Treebank, IMDB",url:""},
    {name:"A Practical Guide to Sentiment Analysis (book)",url:""} ]},
  { group:"Writing", items:[
    {name:"Advice on research and writing, Carnegie Mellon University",url:""} ]}
];
