import Head from 'next/head'
import { NextSeo } from 'next-seo'

type Props = {
  title: string
  description: string
  currentPath?: string
  ogImage?: string
}

const Meta = ({
  title,
  description,
  currentPath = '/',
  ogImage = 'https://res.cloudinary.com/dflb9qqcu/image/upload/v1714299015/irfannm/logo.png',
}: Props) => {
  return (
    <>
      <NextSeo
        title={`${title} - Irfan Nurghiffari Muhajir`}
        description={description}
        openGraph={{
          url: `https://irfannm.dev${currentPath}`,
          title: title,
          description: description,
          images: [{ url: ogImage }],
          siteName: title,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
    </>
  )
}

export default Meta
