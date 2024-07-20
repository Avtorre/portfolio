import { ProjectInfo } from "./types";

export const projects: ProjectInfo[] = [
  {
    page: 'clock_re',
    title:'Clock Project',
    imageFolder: ['clock_re/ClockProjectPreview.png', 'clock_re/PicturebinPreview.png', 'clock_re/PortfolioPreview.png'],
    createdAt: '',
    description: '',
    github: '',
    used:['React.js', 'React-Router'],
    size: ''
  },
  {
    page: 'picturebin',
    title:'Image Hosting',
    imageFolder: ['picturebin/PicturebinPreview.png'],
    createdAt: '',
    description: '',
    github: '',
    used:['React.js','React-bootstrap', 'Axios', 'MobX', 'React-Router', 'Express', 'Sequelize', 'PostgreSQL'],
    size: ''
  },
  {
    page: 'portfolio',
    title:'Portfolio',
    imageFolder: ['portfolio/PortfolioPreview.png'],
    createdAt: '',
    description: '',
    github: '',
    used:['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux','React-bootstrap', 'Octokit'],
    size: ''
  }
]