export type ExperiencesModel = ExperienceModel[];

export interface ExperienceModel {
  year: number;
  experience: ExperienceDetailModel[];
}

export interface ExperienceDetailModel {
  title: string;
  company: string;
  year: string;
  employmentType: EmploymentType;
  responsibility: string[];
}

export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Contract'
  | 'Internship'
  | 'Freelance'
  | 'Freelance (Project)';
