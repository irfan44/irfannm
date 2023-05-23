import PostsList from 'components/blog/PostList';
import Meta from 'components/common/Meta';
import HeroSection from 'components/home/HeroSection';
import ReadMore from 'components/home/ReadMore';
import Section from 'components/layouts/Section';
import { getAllPosts } from 'lib/api';
import AllPosts from 'types/allPosts';

const Index = ({ allPosts }: AllPosts) => {
  const latestPosts = allPosts.slice(0, 4);

  const pageMeta = {
    title: "Hi, I'm Irfan!",
    description: "Irfan Nurghiffari Muhajir's personal website",
    ogImage: '/assets/images/irfan.jpeg',
  };

  return (
    <>
      <Meta data={pageMeta} />
      <div className="space-y-16">
        <HeroSection />
        {latestPosts.length > 0 && (
          <>
            <Section title="Latest Posts">
              <PostsList posts={latestPosts} />
            </Section>
            <ReadMore />
          </>
        )}
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = () => {
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
