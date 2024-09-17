import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query GetProjects($orderBy: ProjectOrderByInput) {
    projects(orderBy: $orderBy) {
      company
      image
      isFeatured
      overview
      name
      description
      startingDate
      endDate
      responsibility
      role
      techStack
      type
      sourceCode
    }
  }
`

export const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects(
    $isFeatured: Boolean
    $orderBy: ProjectOrderByInput
  ) {
    projects(where: { isFeatured: $isFeatured }, orderBy: $orderBy) {
      company
      image
      isFeatured
      overview
      name
      description
      startingDate
      endDate
      responsibility
      role
      techStack
      type
      sourceCode
    }
  }
`
