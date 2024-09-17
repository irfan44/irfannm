import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts($orderBy: PostOrderByInput, $first: Int) {
    posts(orderBy: $orderBy, first: $first) {
      category
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
