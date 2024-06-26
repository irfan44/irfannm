import { Tab } from '@headlessui/react'

import PageHeader from 'components/layouts/PageHeader'
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
          <Tab.List className="space-x-2 mx-auto px-1 py-1 h-9 flex text-sm border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-full w-fit">
            <Tab
              className={({ selected }) =>
                selected
                  ? 'dark:bg-neutral-900 bg-white rounded-full px-3 py-1 font-bold text-black dark:text-white'
                  : 'px-3 py-1'
              }
            >
              Work 💼
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'dark:bg-neutral-900 bg-white rounded-full px-3 py-1 font-bold text-black dark:text-white'
                  : 'px-3 py-1'
              }
            >
              Personal 🧑‍💻
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
                <ProjectList projects={workProjects} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
                <ProjectList projects={personalProjects} />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const projects = await ProjectController.getProjects()
  const workProjects = projects.filter((value) => value.type === 'Work')
  const personalProjects = projects.filter((value) => value.type === 'Personal')

  return { props: { workProjects, personalProjects } }
}

export default Projects
