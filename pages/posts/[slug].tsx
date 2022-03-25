import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/layouts/container";
import PostBody from "../../components/post-page/post-body";
import PostHeader from "../../components/post-page/post-header";
import Layout from "../../components/layouts/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-page/post-title";
import Head from "next/head";
import PostType from "../../types/post";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const components = { Image };

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 prose md:prose-lg max-w-none">
              <Head>
                <title>{post.title} | inm</title>
                <meta property="og:image" content={post.ogImage.url} />
                <meta name="description" content={post.excerpt} />
              </Head>
              <PostBody>
                <PostHeader
                  title={post.title}
                  category={post.category}
                  coverImage={post.coverImage}
                  date={post.date}
                />
                <MDXRemote {...post.content} components={components} />
              </PostBody>
            </article>
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
    "title",
    "category",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
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
  const posts = getAllPosts(["slug"]);

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
