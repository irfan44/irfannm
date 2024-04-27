import Image from 'next/image';
import Link from 'next/link';
import Meta from 'components/Meta';

const PageNotFound = () => {
  const pageMeta = {
    title: 'Not Found',
    description: 'Page not found',
    ogImage: '/assets/images/irfan.jpeg',
  };

  return (
    <>
      <Meta data={pageMeta} />
      <div className="flex flex-col justify-center py-16 text-center space-y-2">
        <h1>404</h1>
        <p>Page not found</p>
        <div className="w-fit bg-black py-2 px-3 rounded-2xl text-white dark:bg-neutral-800 dark:text-white hover:bg-neutral-900 dark:hover:bg-neutral-700 shadow-sm mx-auto">
          <Link href="/">Return to Home</Link>
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/images/Sad.svg"
            alt="Hero"
            width="320"
            height="320"
          />
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
