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
}

const Post = ({ post }: Props) => {
  const pageMeta = {
    title: post.title,
    description: post.excerpt,
    ogImage: post.coverImage.url,
  }

  return (
    <>
      <Meta data={pageMeta} />
      <div className="max-w-3xl mx-auto">
        <PostBreadcrumb />
        <PostBody>
          <PostHeader
            title={post.title}
            category={post.category}
            coverImage={post.coverImage.url}
            date={post.date}
            caption={post.caption}
          />
          <MDXRemote {...post.content} />
        </PostBody>
      </div>
    </>
  )
}

export default Post

interface Params {
  params: {
    slug: string
  }
}

export async function getServerSideProps({ params }: Params) {
  const slug = params.slug
  const post = await PostController.getPost(slug)
  const content = await serialize(post.content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}
