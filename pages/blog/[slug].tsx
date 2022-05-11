import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ErrorPage from 'next/error';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowRightSLine } from 'react-icons/ri';
import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';
import Layout from 'components/layouts/Layout';
import PostBody from 'components/templates/PostContent/PostBody';
import PostHeader from 'components/templates/PostContent/PostHeader';
import PostTitle from 'components/templates/PostContent/PostHeader/PostTitle';
import { getPostBySlug, getAllPosts } from 'lib/api';
import PostType from 'types/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const components = { Image };

const Post = ({ post, preview }: Props) => {
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
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Meta data={pageMeta} />
            <div className="max-w-3xl mx-auto">
              <div>
                <div className="flex items-center hover:cursor-pointer text-neutral-900">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <p className="text-2xl">
                    <RiArrowRightSLine />
                  </p>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </div>
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
                  <MDXRemote {...post.content} components={components} />
                </PostBody>
              </article>
            </div>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
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

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

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
