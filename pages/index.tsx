import PostsList from 'components/blog/PostList';
import Meta from 'components/common/Meta';
import HeroSection from 'components/home/HeroSection';
import ReadMore from 'components/home/ReadMore';
import Container from 'components/layouts/Container';
import Section from 'components/layouts/Section';
import { getAllPosts } from 'lib/api';
import AllPosts from 'types/all-posts';

const Index = ({ allPosts }: AllPosts) => {
  const latestPosts = allPosts.slice(0, 4);

  const pageMeta = {
    title: "Hi, I'm Irfan!",
    description: "Irfan Nurghiffari Muhajir's personal website",
    ogImage: '/assets/images/irfan.jpeg',
  };
  return (
    <Container>
      <Meta data={pageMeta} />
      <div className="space-y-16">
        <HeroSection />
        {latestPosts.length > 0 && (
          <div>
            <Section title="Latest Posts">
              <PostsList posts={latestPosts} />
            </Section>
            <ReadMore />
          </div>
        )}
      </div>
    </Container>
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
