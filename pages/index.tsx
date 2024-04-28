import PostsList from 'components/blog/PostList'
import ExperienceSummary from 'components/home/ExperienceSummary'
import FeaturedProject from 'components/home/FeaturedProject'
import HeroSection from 'components/home/HeroSection'
import ReadMore from 'components/home/ReadMore'
import Section from 'components/layouts/Section'
import Meta from 'components/Meta'
import { ConstantController } from 'lib/controllers/constant'
import { PostController } from 'lib/controllers/post'
import type { PostsModel } from 'lib/models/post'

interface Props {
  description: string
  resumeUrl: string
  posts: PostsModel
}

const Home = ({ description, resumeUrl, posts }: Props) => {
  const pageMeta = {
    title: "Hi, I'm Irfan!",
    description: "Irfan Nurghiffari Muhajir's personal website",
    ogImage: '/assets/images/irfan.jpeg',
  }

  return (
    <>
      <Meta data={pageMeta} />
      <div className="space-y-16">
        <HeroSection description={description} resumeUrl={resumeUrl} />
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
          <ExperienceSummary />
          <FeaturedProject />
        </div>
        {posts && (
          <>
            <Section title="Latest Posts">
              <PostsList posts={posts} />
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
  const posts = await PostController.getHighlightedPosts()

  const resumeUrlValue = constants.filter(
    (constant) => constant.slug === 'resume-url'
  )
  const resumeUrl = resumeUrlValue[0].stringValue

  const descriptionValue = constants.filter(
    (constant) => constant.slug === 'description'
  )
  const description = descriptionValue[0].stringValue

  return {
    props: { description, resumeUrl, posts },
  }
}

export default Home
