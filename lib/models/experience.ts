export type ExperiencesModel = ExperienceModel[]

export interface ExperienceModel {
  year: number
  experiences: ExperienceDetailModel[]
}

export interface ExperienceDetailModel {
  title: string
  company: string
  startingDate: string
  endDate?: string
  employmentType: EmploymentType
  responsibility: string[]
}

export type EmploymentType =
  | 'Full Time'
  | 'Part Time'
  | 'Contract'
  | 'Internship'
  | 'Freelance'
  | 'Freelance (Project)'
