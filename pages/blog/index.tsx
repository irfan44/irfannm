import { Tab } from '@headlessui/react';
import HeroPost from 'components/blog/HeroPost';
import PostsList from 'components/blog/PostsList';
import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';
import Layout from 'components/layouts/Layout';
import PageHeader from 'components/common/PageHeader';
import Section from 'components/layouts/Section';
import { getAllPosts } from 'lib/api';
import AllPosts from 'types/all-posts';

const Posts = ({ allPosts }: AllPosts) => {
  const heroPost = allPosts[0];
  const everyPosts = allPosts.slice(0);
  const techPosts = allPosts.filter((posts) => posts.category === 'Tech');
  const generasiGIGIHPosts = allPosts.filter(
    (posts) => posts.category === 'Generasi Gigih'
  );

  const pageMeta = {
    title: 'Blog',
    description: "Irfan Nurghiffari Muhajir's posts",
    ogImage: '/assets/images/irfan.jpeg',
  };

  const categoryList = [
    { category: 'All', posts: everyPosts },
    { category: 'Tech', posts: techPosts },
    { category: 'Generasi Gigih', posts: generasiGIGIHPosts },
  ];

  return (
    <>
      <Meta data={pageMeta} />
      <Layout>
        <Container>
          <div className="space-y-12">
            <PageHeader
              pageTitle="Blog"
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
                <Tab.Group>
                  <div className="flex justify-center">
                    <div className="h-9 flex items-center text-sm border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-full w-fit">
                      <Tab.List className="space-x-2 px-1 py-1">
                        {categoryList.map((items) => {
                          return (
                            <Tab
                              key={items.category}
                              className={({ selected }) =>
                                selected
                                  ? 'dark:bg-neutral-900 bg-white rounded-full px-3 py-1 font-bold text-black dark:text-white'
                                  : 'px-3 py-1'
                              }
                            >
                              {items.category}
                            </Tab>
                          );
                        })}
                      </Tab.List>
                    </div>
                  </div>
                  <Tab.Panels>
                    {categoryList.map((items) => {
                      return (
                        <Tab.Panel key={items.category}>
                          <div className="mt-8">
                            <PostsList posts={items.posts} />
                          </div>
                        </Tab.Panel>
                      );
                    })}
                  </Tab.Panels>
                </Tab.Group>
              </Section>
            </div>
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
