export type ExperiencesModel = ExperienceModel[]

export interface ExperienceModel {
  id: string
  title: string
  company: string
  companyLogo: string
  employmentType: string
  startingDate: string
  responsibilities: string[]
  endDate?: string
}

export type Experiences = Experience[]

export interface Experience {
  id: string
  title: string
  company: string
  companyLogo: string
  employmentType: string
  startingDate: string
  responsibilities: string[]
  endDate?: string
}
