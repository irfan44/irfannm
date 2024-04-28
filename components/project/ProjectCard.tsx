import { FaChevronRight } from 'react-icons/fa'

import type { ProjectModel } from 'lib/models/project'

interface Props {
  handleOnOpen: () => void
  project: ProjectModel
}

const ProjectCard = ({ handleOnOpen, project }: Props) => {
  return (
    <div
      className="flex flex-col justify-between space-y-3 bg-white border border-neutral-200 cursor-pointer dark:bg-neutral-800 dark:border-neutral-700 rounded-2xl p-5 hover:rounded-xl hover:shadow dark:hover:shadow-neutral-700"
      onClick={handleOnOpen}
    >
      <h4 className="flex items-center">
        {project.name}{' '}
        <span className="text-sm ml-2">
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
                className="bg-black text-white px-2 py-1 rounded-lg text-sm flex items-center dark:bg-neutral-900"
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
