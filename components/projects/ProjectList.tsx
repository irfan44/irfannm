import ProjectCard from 'components/projects/ProjectCard'
import type { ProjectsModel } from 'lib/models/projects'

type Props = {
  projects: ProjectsModel
}

const ProjectList = (props: Props) => {
  return (
    <>
      {props.projects.map((project) => {
        return (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            sourceCode={project.sourceCode}
            url={project.url}
            whatIDo={project.whatIDo}
            images={project.images}
            company={project.company}
            overview={project.overview}
            date={project.date}
            role={project.role}
            type={project.type}
          />
        )
      })}
    </>
  )
}

export default ProjectList
