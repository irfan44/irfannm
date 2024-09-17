import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts($orderBy: PostOrderByInput, $first: Int) {
    posts(orderBy: $orderBy, first: $first) {
      category
      blogCategory {
        slug
      }
      coverImage
      date
      excerpt
      id
      slug
      title
    }
  }
`

export const GET_POST = gql`
  query GetPost($slug: String) {
    posts(where: { slug: $slug }) {
      caption
      category
      blogCategory {
        slug
      }
      content
      coverImage
      createdAt
      date
      excerpt
      id
      publishedAt
      slug
      title
      updatedAt
    }
  }
`

export const GET_LEGACY_POST = gql`
  query GetLegacyPost($legacySlug: String) {
    posts(where: { legacySlug: $legacySlug }) {
      caption
      category
      blogCategory {
        slug
      }
      content
      coverImage
      createdAt
      date
      excerpt
      id
      publishedAt
      slug
      title
      updatedAt
    }
  }
`

export const GET_BLOG_CATEGORIES = gql`
  query GetBlogCategories {
    blogCategories {
      name
      slug
    }
  }
`
