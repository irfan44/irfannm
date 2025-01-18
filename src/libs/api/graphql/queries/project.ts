import { gql } from '@urql/core'

export const GET_PROJECTS = gql`
  query GetProjects($orderBy: ProjectOrderByInput) {
    projects(orderBy: $orderBy) {
      company
      image
      isFeatured
      overview
      name
      slug
      description
      startingDate
      endDate
      responsibility
      role
      techStack
      type
      sourceCode
      url
    }
  }
`

export const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects($isFeatured: Boolean, $orderBy: ProjectOrderByInput, $first: Int) {
    projects(where: { isFeatured: $isFeatured }, orderBy: $orderBy, first: $first) {
      company
      image
      isFeatured
      overview
      name
      slug
      description
      startingDate
      endDate
      responsibility
      role
      techStack
      type
      sourceCode
      url
    }
  }
`

export const GET_PROJECT = gql`
  query GetProject($slug: String) {
    projects(where: { slug: $slug }) {
      company
      image
      isFeatured
      overview
      name
      slug
      description
      startingDate
      endDate
      responsibility
      role
      techStack
      type
      sourceCode
      url
    }
  }
`
