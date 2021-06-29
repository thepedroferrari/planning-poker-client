import { gql } from "@apollo/client"

export const LOGOUT_QUERY = gql`
  query {
    logout {
      data {
        status
        message
      }
    }
  }
`
