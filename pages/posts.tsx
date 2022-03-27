import Container from "../components/layouts/container";
import Layout from "../components/layouts/layout";
import PostsList from "../components/posts/posts-list";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import Head from "next/head";
import Link from "next/link";
import HeroPost from "../components/posts/hero-post";
import Section from "../components/layouts/section";

type Props = {
  allPosts: Post[];
};

const Posts = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const everyPosts = allPosts.slice(0);
  const techPosts = allPosts.filter((posts) => posts.category === "Tech");
  const investPosts = allPosts.filter(
    (posts) => posts.category === "Investment"
  );
  const generasiGIGIHPosts = allPosts.filter(
    (posts) => posts.category === "Generasi Gigih"
  );

  return (
    <>
      <Layout>
        <Head>
          <title>Posts</title>
          <meta
            name="description"
            content="Irfan Nurghiffari Muhajir's personal website & blog"
          />
        </Head>
        <Container>
          <div className="space-y-12">
            <div>
              <h1 className="mb-6">Posts</h1>
              <p>
                I've been writing online since 2014, mostly about web
                development and tech careers. In total, I've written 68 articles
                on my blog. Use the search below to filter by title.
              </p>
            </div>
            <div>
              <Section title="Featured">
                {heroPost && (
                  <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                    category={heroPost.category}
                  />
                )}
              </Section>
            </div>
            {generasiGIGIHPosts.length > 0 && (
              <div>
                <PostsList title="Generasi Gigih" posts={generasiGIGIHPosts} />
              </div>
            )}
            {techPosts.length > 0 && (
              <div>
                <PostsList title="Technology" posts={techPosts} />
              </div>
            )}
            {everyPosts.length > 0 && (
              <div>
                <PostsList title="All Post" posts={everyPosts} />
              </div>
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Posts;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "category",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
