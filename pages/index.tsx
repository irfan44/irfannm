import { useRouter } from 'next/router';
import Button from 'components/common/Button';
import Meta from 'components/common/Meta';
import IconArrowRight from 'components/icons/Arrows/IconsArrowRight';
import Container from 'components/layouts/Container';
import Layout from 'components/layouts/Layout';
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

  const handleReadAllPost = () => {
    router.push('/posts');
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
                <PostsList title="Latest Posts" posts={latestPosts} />
                <div className="mt-4 font-medium">
                  <Button onClick={handleReadAllPost}>
                    <div className="flex items-center hover:cursor-pointer hover:underline">
                      <p>Read all post</p>
                      <IconArrowRight width="22" height="14" />
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
