import { Tab } from '@headlessui/react'

import ProjectCardList from 'components/project/ProjectCardList'
import type { ProjectsModel } from 'lib/models/project'

interface Props {
  workProjects: ProjectsModel
  personalProjects: ProjectsModel
}

const ProjectList = ({ workProjects, personalProjects }: Props) => {
  return (
    <Tab.Group>
      <Tab.List className="mx-auto flex h-9 w-fit space-x-2 rounded-full border border-neutral-200 bg-secondary px-1 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-800">
        <Tab
          className={({ selected }) =>
            selected
              ? 'rounded-full bg-white px-3 py-1 font-bold text-black dark:bg-neutral-900 dark:text-white'
              : 'px-3 py-1'
          }
        >
          Work 💼
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? 'rounded-full bg-white px-3 py-1 font-bold text-black dark:bg-neutral-900 dark:text-white'
              : 'px-3 py-1'
          }
        >
          Personal 🧑‍💻
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <ProjectCardList projects={workProjects} />
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <ProjectCardList projects={personalProjects} />
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default ProjectList
