import PostsList from 'components/blog/PostList'
import ExperienceSummary from 'components/home/ExperienceSummary'
import FeaturedProject from 'components/home/FeaturedProject'
import HeroSection from 'components/home/HeroSection'
import ReadMore from 'components/home/ReadMore'
import Section from 'components/layouts/Section'
import Meta from 'components/Meta'
import { ConstantController } from 'lib/controllers/constant'
import { ExperienceController } from 'lib/controllers/experience'
import { PostController } from 'lib/controllers/post'
import { ProjectController } from 'lib/controllers/project'
import type { ExperiencesModel } from 'lib/models/experience'
import type { PostsModel } from 'lib/models/post'
import type { ProjectsModel } from 'lib/models/project'

interface Props {
  description: string
  resumeUrl: string
  experiences: ExperiencesModel
  featuredProjects: ProjectsModel
  highlightedPosts: PostsModel
}

const Home = ({
  description,
  resumeUrl,
  experiences,
  featuredProjects,
  highlightedPosts,
}: Props) => {
  const pageMeta = {
    title: "Hi, I'm Irfan!",
    description: "Irfan Nurghiffari Muhajir's personal website",
  }

  return (
    <>
      <Meta title={pageMeta.title} description={pageMeta.description} />
      <div className="space-y-16">
        <HeroSection description={description} resumeUrl={resumeUrl} />
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
          <ExperienceSummary experiences={experiences} />
          <FeaturedProject featuredProjects={featuredProjects} />
        </div>
        {highlightedPosts && (
          <>
            <Section title="Latest Posts">
              <PostsList posts={highlightedPosts} />
            </Section>
            <ReadMore url="/blog">Read more post</ReadMore>
          </>
        )}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const constants = await ConstantController.getConstants()
  const experiences = await ExperienceController.getExperiences()
  const featuredProjects = await ProjectController.getFeaturedProjects()
  const highlightedPosts = await PostController.getHighlightedPosts()

  const resumeUrlValue = constants.filter(
    (constant) => constant.slug === 'resume-url'
  )
  const resumeUrl = resumeUrlValue[0].stringValue

  const descriptionValue = constants.filter(
    (constant) => constant.slug === 'description'
  )
  const description = descriptionValue[0].stringValue

  return {
    props: {
      description,
      resumeUrl,
      experiences,
      featuredProjects,
      highlightedPosts,
    },
  }
}

export default Home
