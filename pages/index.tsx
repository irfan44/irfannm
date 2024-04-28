import PostsList from 'components/blog/PostList'
import Meta from 'components/Meta'
import ExperienceSummary from 'components/home/ExperienceSummary'
import FeaturedProject from 'components/home/FeaturedProject'
import HeroSection from 'components/home/HeroSection'
import ReadMore from 'components/home/ReadMore'
import Section from 'components/layouts/Section'
import { PostController } from 'lib/controllers/post'
import type { PostsModel } from 'lib/models/post'

interface Props {
  posts: PostsModel
}

const Index = ({ posts }: Props) => {
  const pageMeta = {
    title: "Hi, I'm Irfan!",
    description: "Irfan Nurghiffari Muhajir's personal website",
    ogImage: '/assets/images/irfan.jpeg',
  }

  return (
    <>
      <Meta data={pageMeta} />
      <div className="space-y-16">
        <HeroSection />
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
          <ExperienceSummary />
          <FeaturedProject />
        </div>
        {posts && (
          <>
            <Section title="Latest Posts">
              <PostsList posts={posts} />
            </Section>
            <ReadMore url="blog">Read more post</ReadMore>
          </>
        )}
      </div>
    </>
  )
}

export default Index

export const getServerSideProps = async () => {
  const posts = await PostController.getHighlightedPosts()

  return {
    props: { posts },
  }
}
