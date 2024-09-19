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
        <ProjectList
          workProjects={workProjects}
          personalProjects={personalProjects}
        />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const projects = await ProjectController.getProjects()

  if (!projects) {
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    }
  }

  const workProjects = projects.filter((value) => value.type === 'Work')
  const personalProjects = projects.filter((value) => value.type === 'Personal')

  return { props: { workProjects, personalProjects } }
}

export default Projects
