import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import PostCardList from 'components/blog/list/PostCardList'
import PostBody from 'components/blog/postDetail/PostBody'
import PostBreadcrumb from 'components/blog/postDetail/PostBreadcrumb'
import PostHeader from 'components/blog/postDetail/PostHeader'
import Meta from 'components/Meta'
import { PostController } from 'lib/controllers/post'
import type { PostModel } from 'lib/models/post'

type Props = {
  slug: string
  post: PostModel
  otherPosts: PostModel[]
}

const Post = ({ slug, post, otherPosts }: Props) => {
  const pageMeta = {
    title: post.title,
    description: post.excerpt,
    ogImage: post.coverImage.derived[0].secure_url,
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
      <div className="mx-auto mb-24 max-w-3xl">
        <PostBreadcrumb />
        <PostBody>
          <PostHeader
            title={post.title}
            category={post.blogCategory.name}
            coverImage={post.coverImage.derived[0].secure_url}
            date={post.date}
            caption={post.caption}
          />
          <MDXRemote {...post.content} />
        </PostBody>
      </div>
      {otherPosts.length > 0 && (
        <div className="mb-32">
          <h2 className="mb-8">More from {post.blogCategory.name}</h2>
          <PostCardList posts={otherPosts} />
        </div>
      )}
    </>
  )
}

interface Params {
  params: {
    slug: string
  }
}

export const getServerSideProps = async ({ params }: Params) => {
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

  const otherPosts = await PostController.getOtherPosts(
    post.blogCategory.slug,
    slug
  )
  const content = await serialize(post.content)

  return {
    props: {
      slug,
      post: {
        ...post,
        content,
      },
      otherPosts: otherPosts ? otherPosts : [],
    },
  }
}

export default Post
