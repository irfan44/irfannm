import { useState } from 'react';
import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';
import Layout from 'components/layouts/Layout';
import PageHeader from 'components/layouts/Page/PageHeader';
import Section from 'components/layouts/Section';
import HeroPost from 'components/templates/Posts/HeroPost';
import PostsList from 'components/templates/Posts/PostsList';
import { getAllPosts } from 'lib/api';
import AllPosts from 'types/all-posts';

const Posts = ({ allPosts }: AllPosts) => {
  const [isActive, setIsActive] = useState('all');

  const heroPost = allPosts[0];
  const everyPosts = allPosts.slice(0);
  const techPosts = allPosts.filter((posts) => posts.category === 'Tech');
  const generasiGIGIHPosts = allPosts.filter(
    (posts) => posts.category === 'Generasi Gigih'
  );

  const pageMeta = {
    title: 'Posts',
    description: "Irfan Nurghiffari Muhajir's posts",
    ogImage: '/assets/images/irfan.jpeg',
  };

  return (
    <>
      <Meta data={pageMeta} />
      <Layout>
        <Container>
          <div className="space-y-12">
            <PageHeader
              pageTitle="Posts"
              pageDescription="I mainly write about technology and other stuffs. Most of this
                post is created for my collage assignment."
            />
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
            <div>
              <Section title="Posts">
                <div className="space-x-2">
                  <button
                    className={
                      isActive === 'all'
                        ? 'font-bold border-b border-dark dark:border-gray-200'
                        : 'font-base'
                    }
                    onClick={() => setIsActive('all')}
                  >
                    All
                  </button>
                  <button
                    className={
                      isActive === 'tech'
                        ? 'font-bold border-b border-dark dark:border-gray-200'
                        : 'font-base'
                    }
                    onClick={() => setIsActive('tech')}
                  >
                    Tech
                  </button>
                  <button
                    className={
                      isActive === 'gg'
                        ? 'font-bold border-b border-dark dark:border-gray-200'
                        : 'font-base'
                    }
                    onClick={() => setIsActive('gg')}
                  >
                    Generasi Gigih
                  </button>
                </div>
                <div>
                  {isActive === 'all' && everyPosts.length > 0 && (
                    <div className="mt-6">
                      <PostsList posts={everyPosts} />
                    </div>
                  )}
                  {isActive === 'tech' && techPosts.length > 0 && (
                    <div className="mt-6">
                      <PostsList posts={techPosts} />
                    </div>
                  )}
                  {isActive === 'gg' && generasiGIGIHPosts.length > 0 && (
                    <div className="mt-6">
                      <PostsList posts={generasiGIGIHPosts} />
                    </div>
                  )}
                </div>
              </Section>
            </div>
            {/* {generasiGIGIHPosts.length > 0 && (
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
            )} */}
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Posts;

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
