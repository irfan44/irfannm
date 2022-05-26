type Experience = {
  title: string;
  company: string;
  year: string;
  responsibility: string[];
};

const workExperience: Experience[] = [
  {
    title: 'Red Hat Help Desk & Class Assistant',
    company: 'Digital Talent Scholarship',
    year: '2020 - 2022',
    responsibility: [
      'Helping in managing Red Hat training LMS',
      'Preparing & managing live sessions at every weekdays',
      'Collaborating with instructor & replying training participant questions',
      'Communicating & reporting to Digital Talent Scholarship team',
    ],
  },
  {
    title: 'Information Technology Staff',
    company: 'Ramaniya',
    year: 'Sep - Dec 2021',
    responsibility: [
      'Managing and maintaining in-house IT infrastructure',
      'Managing and maintaining company website',
      'Helping non IT staff in IT related problems',
    ],
  },
];

export default workExperience;
