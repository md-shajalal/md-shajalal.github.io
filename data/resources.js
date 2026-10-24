/* =========================================================
   RESOURCES
   Add url:"https://..." to make any item a clickable link.
   ========================================================= 

const DATASET = {
  title: "Bengali Semantic Textual Similarity (STS) dataset",
  paragraphs: [
    "Measuring textual similarity is central to many retrieval and NLP applications, including summarization, machine translation, plagiarism detection, sentiment analysis, relevance feedback, text classification, word sense disambiguation, subtopic mining and web search.",
    "<strong>Task.</strong> Given two Bengali sentences, a method returns a continuous similarity score from 0 to 5, where 0 means the sentences are semantically independent and 5 means they are equivalent. Performance is measured by the Pearson correlation between system scores and human judgments.",
    "Details are in our paper <a href=\"https://ieeexplore.ieee.org/document/8554940\"><em>Semantic Textual Similarity in Bengali Text</em></a> (IEEE ICBSLP 2018). If you use this dataset, please <a href=\"https://scholar.googleusercontent.com/scholar.bib?q=info:nPR_3XOY_AIJ:scholar.google.com/&output=citation&scisdr=CgWkEbXDEOzCxQNUmGs:AAGBfm0AAAAAXvBRgGuDqHZKkTVddkbX64lJNqqll7NU&scisig=AAGBfm0AAAAAXvBRgIHO-NBUCDPNStYKbVN7IMNt7i05&scisf=4&ct=citation&cd=-1&hl=en\">cite this paper</a>."
  ],
  datasetUrl: "https://drive.google.com/file/d/1o6B01zSv_k20S8nkeiXFlC1cZJuPfgdV/view?usp=sharing",
  paperUrl:   "https://ieeexplore.ieee.org/document/8554940"
};
*/

const RESOURCES = [
  { group:"Information retrieval", items:[
    {name:"Information retrieval resources, Stanford University", url:"https://nlp.stanford.edu/IR-book/information-retrieval.html"},
    {name:"Resources, ACM Special Interest Group on Information Retrieval (SIGIR)", url:"http://sigir.org/resources/"},
    {name:"Information retrieval resources, University of Maryland, Baltimore County", url:"https://www.csee.umbc.edu/~crowder/pubs/IR.html"},
    {name:"Information retrieval resources and datasets, Niraj", url:"http://sites.google.com/site/nirajatweb/home/information-retrieval-resources"},
    {name:"Text REtrieval Conference (TREC)", url:"https://trec.nist.gov/"},
    {name:"NII test collections for IR systems (NTCIR)", url:"http://research.nii.ac.jp/ntcir/tools/tools-en.html"} ]},

  { group:"Web search, ad hoc and diversified", items:[
    {name:"TREC Web Track guidelines, 2009–2013", url:"https://plg.uwaterloo.ca/~trecweb/"},
    {name:"TREC Web Track 2009 data", url:"https://trec.nist.gov/data/web09.html"},
    {name:"TREC Web Track 2010 data", url:"https://trec.nist.gov/data/web10.html"},
    {name:"TREC Web Track 2011 data", url:"https://trec.nist.gov/data/web2011.html"},
    {name:"TREC Web Track 2012 data", url:"https://trec.nist.gov/data/web2012.html"},
    {name:"TREC Web Track 2013 data", url:"https://trec.nist.gov/data/web2013.html"},
    {name:"ClueWeb09 document collection", url:"https://lemurproject.org/clueweb09/"},
    {name:"ClueWeb12 document collection", url:"https://lemurproject.org/clueweb12/"},
    {name:"NTCIR-13 WWW", url:"http://www.thuir.cn/ntcirwww/"} ]},

  { group:"Diversified subtopic mining", items:[
    {name:"NTCIR-10 INTENT", url:"http://research.nii.ac.jp/ntcir/permission/ntcir-10/perm-en-INTENT.html"},
    {name:"NTCIR-11 IMine-1", url:"http://www.thuir.org/IMine/"},
    {name:"NTCIR-12 IMine-2", url:"http://www.dl.kuis.kyoto-u.ac.jp/imine2/"} ]},

  { group:"Natural language processing", items:[
    {name:"Natural Language Processing with Deep Learning (Stanford CS224n)", url:"http://web.stanford.edu/class/cs224n/"},
    {name:"NLP tasks and selected references", url:"https://github.com/Kyubyong/nlp_tasks"},
    {name:"Deep learning applications for NLP", url:"https://machinelearningmastery.com/applications-of-deep-learning-for-natural-language-processing/"},
    {name:"Understanding CNNs for NLP", url:"http://www.wildml.com/2015/11/understanding-convolutional-neural-networks-for-nlp/"},
    {name:"NLTK corpora", url:"https://www.nltk.org/book/ch02.html"} ]},

  { group:"Sentiment analysis", items:[
    {name:"Sentiment classification dataset (Kaggle)", url:"https://www.kaggle.com/c/si650winter11/data"},
    {name:"Stanford Sentiment Treebank", url:"https://nlp.stanford.edu/sentiment/treebank.html"},
    {name:"IMDB movie review dataset", url:"http://ai.stanford.edu/~amaas/data/sentiment/"},
    {name:"A Practical Guide to Sentiment Analysis (book)", url:"https://www.springer.com/gp/book/9783319553924"} ]},

  { group:"Writing", items:[
    {name:"Advice on research and writing, Carnegie Mellon University", url:"https://www.cs.cmu.edu/~mleone/how-to.html"} ]}
];
