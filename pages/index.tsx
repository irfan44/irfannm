import { useRouter } from 'next/router';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Button from 'components/common/Button';
import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';
import Layout from 'components/layouts/Layout';
import Section from 'components/layouts/Section';
import HeroSection from 'components/templates/Home/HeroSection';
import PostsList from 'components/templates/Posts/PostsList';
import { getAllPosts } from 'lib/api';
import AllPosts from 'types/all-posts';

const Index = ({ allPosts }: AllPosts) => {
  const router = useRouter();

  const latestPosts = allPosts.slice(0, 3);

  const pageMeta = {
    title: "Hi, I'm Irfan!",
    description: "Irfan Nurghiffari Muhajir's personal website",
    ogImage: '/assets/images/irfan.jpeg',
  };

  const handleReadAllPosts = () => {
    router.push('/blog');
  };

  return (
    <>
      <Meta data={pageMeta} />
      <Layout>
        <Container>
          <div className="space-y-16">
            <HeroSection />
            {latestPosts.length > 0 && (
              <div>
                <Section title="Latest Posts">
                  <PostsList posts={latestPosts} />
                </Section>
                <div className="mt-4 font-medium">
                  <Button title="Read all posts" onClick={handleReadAllPosts}>
                    <div className="flex items-center space-x-1 font-medium hover:cursor-pointer text-black dark:text-white">
                      <p>Read all posts</p>
                      <p className="text-xl">
                        <HiArrowNarrowRight />
                      </p>
                    </div>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'category',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
