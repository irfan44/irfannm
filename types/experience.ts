type Experience = {
  title: string;
  company: string;
  year: string;
  employmentType:
    | 'Full-time'
    | 'Part-time'
    | 'Contract'
    | 'Internship'
    | 'Freelance';
  responsibility: string[];
};

export default Experience;
