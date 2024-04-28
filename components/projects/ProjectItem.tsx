import { useState } from 'react'

import ProjectCard from 'components/projects/ProjectCard'
import ProjectDialog from 'components/projects/ProjectDialog'
import type { ProjectModel } from 'lib/models/project'

interface Props {
  project: ProjectModel
}

const ProjectItem = ({ project }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ProjectCard handleOnOpen={() => setIsOpen(true)} project={project} />
      <ProjectDialog
        isOpen={isOpen}
        handleOnClose={() => setIsOpen(false)}
        project={project}
      />
    </>
  )
}

export default ProjectItem
