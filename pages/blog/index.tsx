import HeroPost from 'components/blog/HeroPost'
import Posts from 'components/blog/Posts'
import PageHeader from 'components/layouts/PageHeader'
import Section from 'components/layouts/Section'
import Meta from 'components/Meta'
import { PostController } from 'lib/controllers/post'
import type { PostsModel } from 'lib/models/post'

interface Props {
  posts: PostsModel
}

const Blog = ({ posts }: Props) => {
  const heroPost = posts[0]

  const pageMeta = {
    title: 'Blog',
    description: "Irfan Nurghiffari Muhajir's posts",
    currentPath: '/blog',
  }

  const pageHeader = {
    title: 'Blog',
    description:
      'Place where you can read my writing. I mainly write about tech, finance, and investment stuff.',
  }

  return (
    <>
      <Meta
        title={pageMeta.title}
        description={pageMeta.description}
        currentPath={pageMeta.currentPath}
      />
      <div className="space-y-12">
        <PageHeader
          title={pageHeader.title}
          description={pageHeader.description}
        />
        <Section title="Featured">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage.secure_url}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              category={heroPost.category}
            />
          )}
        </Section>
        <Section title="Posts">
          <Posts posts={posts} />
        </Section>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const posts = await PostController.getPosts()

  return {
    props: { posts },
  }
}

export default Blog
