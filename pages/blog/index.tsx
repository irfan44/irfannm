import HeroPost from 'components/blog/list/HeroPost'
import PostsList from 'components/blog/list/PostsList'
import PageHeader from 'components/common/layouts/PageHeader'
import Section from 'components/common/layouts/Section'
import Meta from 'components/Meta'
import { PostController } from 'lib/controllers/post'
import type { CategorizedPostsModel } from 'lib/models/post'

interface Props {
  categorizedPosts: CategorizedPostsModel
}

const Blog = ({ categorizedPosts }: Props) => {
  const heroPost = categorizedPosts[0].posts[0]

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
              coverImage={heroPost.coverImage.derived[0].secure_url}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              category={heroPost.category}
            />
          )}
        </Section>
        <Section title="Posts">
          <PostsList categorizedPosts={categorizedPosts} />
        </Section>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const categorizedPosts = await PostController.getCategorizedPosts()

  if (!categorizedPosts) {
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    }
  }

  return {
    props: { categorizedPosts },
  }
}

export default Blog
