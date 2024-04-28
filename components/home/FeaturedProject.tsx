import Section from 'components/layouts/Section'
import ProjectList from 'components/project/ProjectList'
import projects from 'datas/projects'

import ReadMore from './ReadMore'

const FeaturedProject = () => {
  const featuredProject = projects.filter((value) => value.isFeatured === true)

  return (
    <Section title="Featured Project">
      <div className="space-y-4">
        <ProjectList projects={featuredProject} />
      </div>
      <ReadMore url="/projects">View all projects</ReadMore>
    </Section>
  )
}

export default FeaturedProject
