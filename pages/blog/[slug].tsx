import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import Meta from 'components/Meta'
import PostBody from 'components/post/PostBody'
import PostBreadcrumb from 'components/post/PostBreadcrumb'
import PostHeader from 'components/post/PostHeader'
import { PostController } from 'lib/controllers/post'
import type { PostModel } from 'lib/models/post'

type Props = {
  post: PostModel
  slug: string
}

const Post = ({ post, slug }: Props) => {
  const pageMeta = {
    title: post.title,
    description: post.excerpt,
    ogImage: post.coverImage.secure_url,
    currentPath: `/blog/${slug}`,
  }

  return (
    <>
      <Meta
        title={pageMeta.title}
        description={pageMeta.description}
        ogImage={pageMeta.ogImage}
        currentPath={pageMeta.currentPath}
      />
      <div className="max-w-3xl mx-auto">
        <PostBreadcrumb />
        <PostBody>
          <PostHeader
            title={post.title}
            category={post.category}
            coverImage={post.coverImage.secure_url}
            date={post.date}
            caption={post.caption}
          />
          <MDXRemote {...post.content} />
        </PostBody>
      </div>
    </>
  )
}

interface Params {
  params: {
    slug: string
  }
}

export const getStaticPaths = async () => {
  const posts = await PostController.getPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = params.slug
  const post = await PostController.getPost(slug)
  const content = await serialize(post.content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
      slug,
    },
  }
}

export default Post
