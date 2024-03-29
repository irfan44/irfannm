import HeroPost from 'components/pages/blog/HeroPost';
import Posts from 'components/pages/blog/Posts';
import Meta from 'components/common/Meta';
import PageHeader from 'components/layouts/PageHeader';
import Section from 'components/layouts/Section';
import { getAllPosts } from 'lib/postsHandler';
import AllPosts from 'types/allPosts';

const Blog = ({ allPosts }: AllPosts) => {
  const heroPost = allPosts[0];

  const pageMeta = {
    title: 'Blog',
    description: "Irfan Nurghiffari Muhajir's posts",
    ogImage: '/assets/images/irfan.jpeg',
  };

  return (
    <>
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
    </>
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
