import HeroPost from 'components/blog/HeroPost'
import Posts from 'components/blog/Posts'
import Meta from 'components/Meta'
import PageHeader from 'components/layouts/PageHeader'
import Section from 'components/layouts/Section'
import { PostHandler } from 'lib/handlers/Post'
import type { AllPostsModel } from 'lib/models/post'

const Blog = ({ allPosts }: AllPostsModel) => {
  const heroPost = allPosts[0]

  const pageMeta = {
    title: 'Blog',
    description: "Irfan Nurghiffari Muhajir's posts",
    ogImage: '/assets/images/irfan.jpeg',
  }

  return (
    <>
      <Meta data={pageMeta} />
      <div className="space-y-12">
        <PageHeader
          pageTitle="Blog"
          pageDescription="I mainly write about technology and other stuffs. Most of this
                post is created for my collage assignment."
        />
        <Section title="Featured">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              category={heroPost.category}
            />
          )}
        </Section>
        <Section title="Posts">
          <Posts allPosts={allPosts} />
        </Section>
      </div>
    </>
  )
}
export default Blog

export const getStaticProps = () => {
  const allPosts = PostHandler.getAllPosts([
    'title',
    'category',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
