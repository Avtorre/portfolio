import { ProjectInfo } from "./types";

export const projects: ProjectInfo[] = [
  {
    page: 'clock_re',
    title:'Clock Project',
    imageFolder: ['clock_re/clockProject_preview.png', 'clock_re/clockProject_start.png', 'clock_re/clockProject_alarm.png', 'clock_re/clockProject_about.png', 'clock_re/clockProject_1440.png', 'clock_re/clockProject_1024.png', 'clock_re/clockProject_768.png'],
    createdAt: '',
    description: '',
    github: '',
    used:['React.js', 'React-Router'],
    size: ''
  },
  {
    page: 'picturebin',
    title:'Image Hosting',
    imageFolder: ['picturebin/picturebin_preview.png', 'picturebin/picturebin_imagePage.png', 'picturebin/picturebin_collections.png', 'picturebin/picturebin_authorization.png', 'picturebin/picturebin_upload.png', 'picturebin/picturebin_about.png', 'picturebin/picturebin_1440.png', 'picturebin/picturebin_1024.png', 'picturebin/picturebin_768.png'],
    createdAt: '',
    description: '',
    github: '',
    used:['React.js','React-bootstrap', 'Axios', 'MobX', 'React-Router', 'Express', 'Sequelize', 'PostgreSQL'],
    size: ''
  },
  {
    page: 'portfolio',
    title:'Portfolio',
    imageFolder: ['portfolio/portfolio_preview.png', 'portfolio/portfolio_projectPage.png', 'portfolio/portfolio_768proj.png', 'portfolio/portfolio_about.png', 'portfolio/portfolio_1440.png', 'portfolio/portfolio_1024.png', 'portfolio/portfolio_768.png', 'portfolio/portfolio_m1.png', 'portfolio/portfolio_m2.png'],
    createdAt: '',
    description: '',
    github: '',
    used:['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux','React-bootstrap', 'Octokit'],
    size: ''
  }
]