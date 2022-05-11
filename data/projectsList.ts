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
    name: 'irfannm.xyz',
    description: 'My personal website and blog',
    techStack: ['NextJS', 'Tailwind CSS', 'TypeScript'],
    sourceCode: 'https://github.com/irfan44/irfannm.xyz',
  },
  {
    id: '2',
    name: 'SocialTree',
    description: 'Linktree like web for my social media link sharing',
    techStack: ['React', 'Vite', 'TypeScript'],
    sourceCode: 'https://github.com/irfan44/socialtree',
  },
  {
    id: '3',
    name: 'Spotifie',
    description:
      'Spotify playlist creator using Spotify API for Generasi Gigih final project',
    techStack: ['React', 'Redux', 'TypeScript'],
    sourceCode: 'https://github.com/irfan44/generasi-gigih-homework',
  },
  {
    id: '4',
    name: 'Ramaniya.id',
    description:
      "Ramaniya's company website that i manage. Built using Wordpress and Divi theme.",
    techStack: ['Wordpress'],
    sourceCode: '',
  },
  {
    id: '5',
    name: 'Aksara Sunda',
    description:
      'Sundanese writing (aksara) learning app for android implemented using firebase to store questions data',
    techStack: ['Java', 'Firebase'],
    sourceCode: 'https://github.com/irfan44/Aksara_sundaV2',
  },
  {
    id: '6',
    name: 'Optimasi Barang Bawaan',
    description:
      'Implementation of genetic algrothim (GA) for optimizing the items to carry in a bag for travel',
    techStack: ['Python', 'Jupyter Notebook'],
    sourceCode: 'https://github.com/irfan44/GA-Optimasi-Barang-Bawaan',
  },
  {
    id: '7',
    name: 'YukJahit',
    description: 'A web application for online dressmaking service',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/irfan44/UAS-Pemrograman-Web',
  },
];

export default ProjectsList;
