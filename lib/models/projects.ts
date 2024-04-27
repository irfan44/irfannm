export type ProjectsModel = ProjectModel[];

export interface ProjectModel {
  id?: string;
  isFeatured?: boolean;
  name: string;
  type?: 'Work' | 'Personal';
  company?: string;
  description: string;
  techStack: string[];
  sourceCode: string;
  url: string;
  whatIDo?: string[];
  images?: string;
  overview?: string;
  date?: string;
  role?: string;
}
