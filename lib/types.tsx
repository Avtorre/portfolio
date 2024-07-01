export type ProjectCard = {
  id: number,
  page:string,
  preview: string,
  title: string,
  description: string
}

export type ProjectInfo = {
  title: string,
  imageFolder: [string],
  description: string,
  github: string,
  used: [string]
}
