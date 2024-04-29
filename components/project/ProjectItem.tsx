import { useState } from 'react'

import ProjectCard from 'components/project/ProjectCard'
import ProjectDialog from 'components/project/ProjectDialog'
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
