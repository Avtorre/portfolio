import { ProjectCard } from "@/lib/types"

export const ProjectLib = [
  {
    id: 1,
    page: 'portfolio',
    preview: '/images/projectImages/portfolio/portfolio_preview.png',
    title: 'Portfolio',
    description: "It's what you are looking at."
  },
  {
    id: 2,
    page: 'ghrepo-finder',
    preview: '/images/projectImages/repo-finder/repo-finder_preview.png',
    title: 'Repo finder',
    description: 'Search repositories by name.'
  },
  {
    id: 3,
    page: 'internetlab-task',
    preview: '/images/projectImages/internetlab/internetlab_main.png',
    title: 'Test assignment',
    description: 'SPA with responsive design.'
  },  
  {
    id: 4,
    page: 'clock_re',
    preview: '/images/projectImages/clock_re/clockProject_preview.png',
    title: 'Clock Project',
    description: 'Combination of several projects.'
  },
  {
    id: 5,
    page: 'picturebin',
    preview: '/images/projectImages/picturebin/picturebin_preview.png',
    title: 'Image hosting',
    description: 'Fullstack project.'
  },
] as ProjectCard[]