import HeroPost from 'components/blog/HeroPost';
import Posts from 'components/blog/Posts';
import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';
import PageHeader from 'components/layouts/PageHeader';
import Section from 'components/layouts/Section';
import { getAllPosts } from 'lib/api';
import AllPosts from 'types/all-posts';

const Blog = ({ allPosts }: AllPosts) => {
  const heroPost = allPosts[0];

  const pageMeta = {
    title: 'Blog',
    description: "Irfan Nurghiffari Muhajir's posts",
    ogImage: '/assets/images/irfan.jpeg',
  };

  return (
    <Container>
      <Meta data={pageMeta} />
      <div className="space-y-12">
        <PageHeader
          pageTitle="Blog"
          pageDescription="I mainly write about technology and other stuffs. Most of this
                post is created for my collage assignment."
        />
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
        <Section title="Posts">
          <Posts allPosts={allPosts} />
        </Section>
      </div>
    </Container>
  );
};
export default Blog;

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
