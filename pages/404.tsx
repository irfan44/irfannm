import Link from 'next/link'

import Meta from 'components/Meta'

const PageNotFound = () => {
  const pageMeta = {
    title: 'Not Found',
    description: 'Page not found',
  }

  return (
    <>
      <Meta title={pageMeta.title} description={pageMeta.description} />
      <div className="flex flex-col justify-center space-y-2 py-16 text-center">
        <h1>404</h1>
        <p>Page not found</p>
        <div className="mx-auto w-fit rounded-2xl bg-black px-3 py-2 text-white shadow-sm hover:bg-neutral-900 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700">
          <Link href="/">Return to Home</Link>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/images/Sad.svg"
            alt="Hero"
            width="320"
            height="320"
          />
        </div>
      </div>
    </>
  )
}

export default PageNotFound
