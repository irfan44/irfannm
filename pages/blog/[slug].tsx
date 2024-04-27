import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Meta from 'components/Meta'
import PostBody from 'components/post/PostBody'
import PostHeader from 'components/post/PostHeader'
import PostTitle from 'components/post/PostTitle'
import { PostHandler } from 'lib/handlers/Post'
import type { PostModel, PostsModel } from 'lib/models/post'
import PostBreadcrumb from '../../components/post/PostBreadcrumb'

type Props = {
  post: PostModel
  morePosts: PostsModel
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const pageMeta = {
    title: post.title,
    description: post.excerpt,
    ogImage: post.ogImage.url,
  }

  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Meta data={pageMeta} />
          <div className="max-w-3xl mx-auto">
            <PostBreadcrumb />
            <PostBody>
              <PostHeader
                title={post.title}
                category={post.category}
                coverImage={post.coverImage}
                date={post.date}
                caption={post.caption}
              />
              <MDXRemote {...post.content} />
            </PostBody>
          </div>
        </>
      )}
    </>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = PostHandler.getPostBySlug(params.slug, [
    'title',
    'category',
    'date',
    'slug',
    'content',
    'ogImage',
    'caption',
    'coverImage',
  ])

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

export function getStaticPaths() {
  const posts = PostHandler.getAllPosts(['slug'])

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
