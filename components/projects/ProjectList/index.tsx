import ProjectCard from 'components/projects/ProjectCard';
import projects from 'data/constants/projects';

const ProjectList = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id + project.name}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            sourceCode={project.sourceCode}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
