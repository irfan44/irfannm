import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowRightSLine } from 'react-icons/ri';
import Meta from 'components/Meta';
import PostBody from 'components/post/PostBody';
import PostHeader from 'components/post/PostHeader';
import PostTitle from 'components/post/PostTitle';
import { PostHandler } from 'lib/handlers/Post';
import PostType from 'types/post';
import { NextSeo } from 'next-seo';
import { BASE_URL, SITE_NAME } from 'datas/constants';

type Props = {
  post: PostType;
  morePosts: PostType[];
};

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const pageMeta = {
    title: post.title,
    description: post.excerpt,
    ogImage: post.ogImage.url,
  };
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <NextSeo
            title={post.title}
            description={post.excerpt}
            canonical={`${BASE_URL}/${post.slug}`}
            openGraph={{
              type: 'article',
              article: {
                publishedTime: '2022-06-21T23:04:13Z',
                modifiedTime: '2022-01-21T18:04:43Z',
                authors: ['Irfan Nurghiffari Muhajir'],
                tags: [`${post.category}`],
              },
              url: `${BASE_URL}/${post.slug}`,
              site_name: `${SITE_NAME}`,
            }}
          />
          <Meta data={pageMeta} />
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-2 w-fit hover:cursor-pointer text-neutral-900 dark:text-gray-200">
              <Link href="/">Home</Link>
              <RiArrowRightSLine className="text-2xl" />
              <Link href="/blog">Blog</Link>
            </div>
            <article className="mb-32 text-neutral-800 prose md:prose-lg max-w-none dark:prose-invert dark:text-gray-200">
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
            </article>
          </div>
        </>
      )}
    </>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

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
  ]);

  const content = await serialize(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export function getStaticPaths() {
  const posts = PostHandler.getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
