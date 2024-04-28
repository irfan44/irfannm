import { gql } from '@apollo/client'

export const GET_CONSTANTS = gql`
  query GetConstants {
    constants {
      slug
      name
      stringValue
      markdownValue
      updatedAt
    }
  }
`

export const GET_CONSTANT = gql`
  query GetConstant($slug: String) {
    constants(where: { slug: $slug }) {
      slug
      name
      stringValue
      markdownValue
    }
  }
`
