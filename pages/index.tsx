import PostsList from 'components/blog/PostList';
import Meta from 'components/Meta';
import ExperienceSummary from '../components/home/ExperienceSummary';
import FeaturedProject from '../components/home/FeaturedProject';
import HeroSection from 'components/home/HeroSection';
import ReadMore from 'components/home/ReadMore';
import Section from 'components/layouts/Section';
import { PostHandler } from 'lib/handlers/Post';
import type { AllPostsModel } from 'lib/models/post';

const Index = ({ allPosts }: AllPostsModel) => {
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
            <ReadMore url="blog">Read more post</ReadMore>
          </>
        )}
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = () => {
  const allPosts = PostHandler.getAllPosts([
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
