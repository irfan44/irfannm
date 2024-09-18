import { Tab } from '@headlessui/react'

import PageHeader from 'components/common/layouts/PageHeader'
import Meta from 'components/Meta'
import ProjectList from 'components/project/ProjectList'
import { ProjectController } from 'lib/controllers/project'
import type { ProjectsModel } from 'lib/models/project'

interface Props {
  workProjects: ProjectsModel
  personalProjects: ProjectsModel
}

const Projects = ({ workProjects, personalProjects }: Props) => {
  const pageMeta = {
    title: 'Projects',
    description: "Irfan Nurghiffari Muhajir's projects",
    currentPath: '/about',
  }

  const pageHeader = {
    title: 'Projects',
    description: 'Various projects that I have worked on.',
  }

  return (
    <>
      <Meta
        title={pageMeta.title}
        description={pageMeta.description}
        currentPath={pageMeta.currentPath}
      />
      <PageHeader
        title={pageHeader.title}
        description={pageHeader.description}
      />
      <div className="mt-6">
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
                <ProjectList projects={workProjects} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <ProjectList projects={personalProjects} />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const projects = await ProjectController.getProjects()
  const workProjects = projects.filter((value) => value.type === 'Work')
  const personalProjects = projects.filter((value) => value.type === 'Personal')

  return { props: { workProjects, personalProjects } }
}

export default Projects
