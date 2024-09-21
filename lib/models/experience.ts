import type { CloudinaryImageModel } from './media'

export type ExperiencesModel = ExperienceModel[]

export interface ExperienceModel {
  title: string
  company: string
  companyLogo: CloudinaryImageModel
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
