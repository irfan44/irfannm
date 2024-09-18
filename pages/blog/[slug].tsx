import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import PostBody from 'components/blog/postDetail/PostBody'
import PostBreadcrumb from 'components/blog/postDetail/PostBreadcrumb'
import PostHeader from 'components/blog/postDetail/PostHeader'
import Meta from 'components/Meta'
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
      <div className="mx-auto max-w-3xl">
        <PostBreadcrumb />
        <PostBody>
          <PostHeader
            title={post.title}
            category={post.blogCategory.name}
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

export async function getServerSideProps({ params }: Params) {
  const slug = params.slug
  const post = await PostController.getPost(slug)

  if (!post) {
    const legacyPost = await PostController.getLegacyPost(slug)

    if (!legacyPost) {
      return {
        notFound: true,
      }
    }

    return {
      redirect: {
        destination: `/blog/${legacyPost.slug}`,
        permanent: true,
      },
    }
  }

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
