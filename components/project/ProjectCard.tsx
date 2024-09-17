import { FaChevronRight } from 'react-icons/fa'

import type { ProjectModel } from 'lib/models/project'

interface Props {
  handleOnOpen: () => void
  project: ProjectModel
}

const ProjectCard = ({ handleOnOpen, project }: Props) => {
  return (
    <div
      className="flex cursor-pointer flex-col justify-between space-y-3 rounded-2xl border border-neutral-200 bg-secondary p-4 hover:bg-secondaryHover dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800/75"
      onClick={handleOnOpen}
    >
      <h4 className="flex items-center">
        {project.name}{' '}
        <span className="ml-2 text-sm">
          <FaChevronRight />
        </span>
      </h4>
      <p>{project.description}</p>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((stack) => {
            return (
              <div
                key={stack}
                className="flex items-center rounded-lg bg-black px-2 py-1 text-sm text-white dark:bg-neutral-900"
              >
                <p>{stack}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
