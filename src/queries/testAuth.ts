import { gql } from "@apollo/client"

export const TEST_AUTH = gql`
  mutation TestAuth {
    testAuth {
      data {
        status
        error {
          message
        }
      }
    }
  }
`
