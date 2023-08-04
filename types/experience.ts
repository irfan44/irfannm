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

export default Experience;
