export type ProjectsModel = ProjectModel[]

export interface ProjectModel {
  id: string
  isFeatured: boolean
  name: string
  slug: string
  image?: string
  projectType: string
  startingDate: string
  endDate?: string
  role: string
  excerpt: string
  overview: string
  techStack: string[]
  responsibilities?: string[]
  sourceCode?: string
  url?: string
  company?: string
}
