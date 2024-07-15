export type ProjectCard = {
  id: number,
  page:string,
  preview: string,
  title: string,
  description: string
}

export type ProjectInfo = {
  page: string,
  title: string,
  imageFolder: string[],
  createdAt: string,
  description: string,
  github: string,
  used: string[],
  size: string
}

export type FetchedRepoInfo = {
  createdAt: string,
  description: string,
  github: string,
  size: string
}