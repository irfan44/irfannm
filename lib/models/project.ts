export type ProjectsModel = ProjectModel[]

export interface ProjectModel {
  id?: string
  isFeatured?: boolean
  name: string
  startingDate: string
  endDate?: string
  type?: 'Work' | 'Personal'
  company?: string
  description: string
  techStack: string[]
  sourceCode?: string
  url?: string
  responsibility?: string[]
  image?: {
    secure_url: string
  }
  overview?: string
  role?: string
}
