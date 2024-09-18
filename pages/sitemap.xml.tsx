import * as process from 'node:process'

import { PostController } from 'lib/controllers/post'
import type { PostModel, PostsModel } from 'lib/models/post'

const EXTERNAL_DATA_URL = process.env.SITE_URL || 'https://irfannm.dev'

function generateSiteMap(posts: PostsModel) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      <url>
        <loc>${EXTERNAL_DATA_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${EXTERNAL_DATA_URL}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${EXTERNAL_DATA_URL}/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${EXTERNAL_DATA_URL}/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${posts
        .map((post: PostModel) => {
          return `<url>
            <loc>${EXTERNAL_DATA_URL}/blog/${post.slug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
        })
        .join('')}
      ${posts
        .map((post: PostModel) => {
          if (!post.legacySlug) return

          return `<url>
            <loc>${EXTERNAL_DATA_URL}/blog/${post.legacySlug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
        })
        .join('')}
   </urlset>
 `
}

function SiteMap() {}

interface Params {
  res: any
}

export const getServerSideProps = async ({ res }: Params) => {
  const response = await PostController.getPosts()

  if (!response) {
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    }
  }

  const sitemap = generateSiteMap(response)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
