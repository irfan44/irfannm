import ReadMore from 'components/home/ReadMore'
import Section from 'components/layouts/Section'
import ProjectList from 'components/project/ProjectList'
import type { ProjectsModel } from 'lib/models/project'

interface Props {
  featuredProjects: ProjectsModel
}

const FeaturedProject = ({ featuredProjects }: Props) => {
  return (
    <Section title="Featured Project">
      <div className="space-y-4">
        <ProjectList projects={featuredProjects} />
      </div>
      <ReadMore url="/projects">View all projects</ReadMore>
    </Section>
  )
}

export default FeaturedProject
