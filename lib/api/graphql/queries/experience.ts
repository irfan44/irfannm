import { gql } from '@apollo/client'

export const GET_EXPERIENCES = gql`
  query GetExperiences($orderBy: ExperienceOrderByInput) {
    experiences(orderBy: $orderBy) {
      company
      employmentType
      startingDate
      endDate
      responsibility
      title
    }
  }
`
