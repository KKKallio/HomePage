/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'GutResearch@AmsterdamUMC',
    position: 'PhD candidate',
    url: 'https://www.gut-research.com/',
    startDate: '2024-11',
    summary: 'In November 2025, I joined the GUT Research group, where I am working on projects that apply machine learning to identify biomarkers for predicting treatment response in inflammatory bowel disease (IBD). Our goal is not only to improve predictive accuracy but also to uncover the underlying biological mechanisms that drive differential treatment outcomes.',
  },
  {
    name: 'Qulab@USTC',
    position: 'Students & Internship',
    url: 'https://qulab.ustc.edu.cn/',
    startDate: '2019-05',
    endDate: '2024-07',
    summary: 'I start my research journey from Qulab, where I gain the basic knowledge of single cell omics and start several projects in bioinformatics.',
    highlights: [
      'Developing a single-cell multi-omics technologies, which could simlutaneously detect chromatin accessibility and transcriptomcis in the same cell.',
      'Systematicly compare experimental methods and bioinformatic pipelines for detecting extrachromosomal circular DNA',
    ],
  },
];

export default work;
