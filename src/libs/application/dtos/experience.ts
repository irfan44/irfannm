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
