import Container from "../components/layouts/container";
import PostsList from "../components/posts/posts-list";
import Layout from "../components/layouts/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import HeroSection from "../components/pages/home/hero-section";
import Link from "next/link";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const latestPosts = allPosts.slice(0, 3);
  return (
    <>
      <Layout>
        <Head>
          <title>Hi, I'm Irfan!</title>
        </Head>
        <Container>
          <HeroSection />
          {latestPosts.length > 0 && (
            <div>
              <PostsList title="Latest Posts" posts={latestPosts} />
              <h5 className="mt-4">
                <Link href="/">
                  <a>Read all post</a>
                </Link>
              </h5>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

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
