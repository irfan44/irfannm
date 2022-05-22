import Image from 'next/image';
import Link from 'next/link';
import Meta from 'components/common/Meta';
import Container from 'components/layouts/Container';

const PageNotFound = () => {
  const pageMeta = {
    title: 'Not Found',
    description: 'Page not found',
    ogImage: '/assets/images/irfan.jpeg',
  };

  return (
    <Container>
      <Meta data={pageMeta} />
      <div className="flex flex-col justify-center py-16">
        <div className="text-center space-y-2">
          <h1>404</h1>
          <p>Page not found</p>
          <div className="w-fit bg-black py-2 px-3 rounded-2xl text-white dark:bg-neutral-800 dark:text-white hover:bg-neutral-900 dark:hover:bg-neutral-700 shadow-sm mx-auto">
            <Link href="/">
              <a>
                <p>Return to Home</p>
              </a>
            </Link>
          </div>
          <div>
            <Image
              src="/assets/images/Sad.svg"
              alt="Hero"
              width="320"
              height="320"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PageNotFound;
