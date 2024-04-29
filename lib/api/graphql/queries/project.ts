import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      company
      image
      isFeatured
      overview
      name
      description
      date
      responsibility
      role
      techStack
      type
      sourceCode
    }
  }
`

export const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects($isFeatured: Boolean) {
    projects(where: { isFeatured: $isFeatured }) {
      company
      image
      isFeatured
      overview
      name
      description
      date
      responsibility
      role
      techStack
      type
      sourceCode
    }
  }
`
