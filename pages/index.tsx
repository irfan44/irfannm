import PostsList from 'components/pages/blog/PostList';
import Meta from 'components/common/Meta';
import HeroSection from 'components/pages/home/HeroSection';
import ReadMore from 'components/pages/home/ReadMore';
import Section from 'components/layouts/Section';
import { getAllPosts } from 'lib/postsHandler';
import AllPosts from 'types/allPosts';
import ExperienceSummary from '../components/pages/home/ExperienceSummary';
import FeaturedProject from '../components/pages/home/FeaturedProject';

const Index = ({ allPosts }: AllPosts) => {
  const latestPosts = allPosts.slice(0, 2);

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
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
          <ExperienceSummary />
          <FeaturedProject />
        </div>
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
