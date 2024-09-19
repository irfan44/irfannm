import { gql } from '@urql/core'

export const GET_POSTS = gql`
  query GetPosts($orderBy: PostOrderByInput, $first: Int) {
    posts(orderBy: $orderBy, first: $first) {
      category
      blogCategory {
        name
        slug
      }
      coverImage
      date
      excerpt
      id
      slug
      legacySlug
      title
    }
  }
`

export const GET_CATEGORIZED_POSTS = gql`
  query GetCategorizedPosts($orderBy: PostOrderByInput) {
    posts(orderBy: $orderBy) {
      category
      blogCategory {
        name
        slug
      }
      coverImage
      date
      excerpt
      id
      slug
      legacySlug
      title
    }
    blogCategories {
      name
      slug
    }
  }
`

export const GET_POST = gql`
  query GetPost($slug: String) {
    posts(where: { slug: $slug }) {
      caption
      category
      blogCategory {
        name
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
      legacySlug
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
        name
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
      legacySlug
      title
      updatedAt
    }
  }
`
