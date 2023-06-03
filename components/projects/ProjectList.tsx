import ProjectCard from 'components/projects/ProjectCard';
import projects from 'data/projects';

const ProjectList = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            url={project.url}
            sourceCode={project.sourceCode}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
