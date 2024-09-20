export type ExperiencesModel = ExperienceModel[]

export interface ExperienceModel {
  title: string
  company: string
  companyLogo: {
    secure_url: string
  }
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
