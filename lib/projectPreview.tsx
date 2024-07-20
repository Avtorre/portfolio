import { ProjectCard } from "@/lib/types"

export const ProjectLib= [
  {
    id: 1,
    page: 'portfolio',
    preview: '/images/projectImages/portfolio/PortfolioPreview.png',
    title: 'Portfolio',
    description: "It's what you are looking at."
  },
  {
    id: 2,
    page: 'clock_re',
    preview: '/images/projectImages/clock_re/ClockProjectPreview.png',
    title: 'Clock Project',
    description: 'Compilation of several projects.'
  },
  {
    id: 3,
    page: 'picturebin',
    preview: '/images/projectImages/picturebin/PicturebinPreview.png',
    title: 'Image hosting',
    description: 'Fullstack project.'
  }
] as ProjectCard[]