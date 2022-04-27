type Projects = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  sourceCode: string;
};

const ProjectsList: Projects[] = [
  {
    id: '1',
    name: 'inm',
    description: 'My personal website and blog',
    techStack: ['NextJS', 'Tailwind CSS', 'TypeScript'],
    sourceCode: 'https://github.com/irfan44/inm-typescript',
  },
  {
    id: '2',
    name: 'Ramaniya.id',
    description:
      "Ramaniya's company website that i manage. Built using Wordpress and Divi theme.",
    techStack: ['Wordpress'],
    sourceCode: '',
  },
  {
    id: '3',
    name: 'Aksara Sunda',
    description:
      'Sundanese writing (aksara) learning app for android implemented using firebase to store questions data',
    techStack: ['Java', 'Firebase'],
    sourceCode: 'https://github.com/irfan44/Aksara_sundaV2',
  },
  {
    id: '4',
    name: 'Optimasi Barang Bawaan',
    description:
      'Implementation of genetic algrothim (GA) for optimizing the items to carry in a bag for travel',
    techStack: ['Python', 'Jupyter Notebook'],
    sourceCode: 'https://github.com/irfan44/GA-Optimasi-Barang-Bawaan',
  },
  {
    id: '5',
    name: 'YukJahit',
    description: 'A web application for online dressmaking service',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/irfan44/UAS-Pemrograman-Web',
  },
];
export default ProjectsList;
