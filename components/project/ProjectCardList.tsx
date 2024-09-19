import ProjectItem from 'components/project/ProjectItem'
import type { ProjectsModel } from 'lib/models/project'

type Props = {
  projects: ProjectsModel
}

const ProjectCardList = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project) => {
        return <ProjectItem key={project.name} project={project} />
      })}
    </>
  )
}

export default ProjectCardList
