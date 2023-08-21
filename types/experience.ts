type Experience = {
  title: string;
  company: string;
  year: string;
  employmentType:
    | 'Full-time'
    | 'Part-time'
    | 'Contract'
    | 'Internship'
    | 'Freelance'
    | 'Freelance (Project)';
  responsibility: string[];
};

type WorkExperience = {
  year: number;
  experience: Experience[];
};

export type { Experience, WorkExperience };
