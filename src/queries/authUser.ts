import { gql } from "@apollo/client"

export const AUTH_USER = gql`
  mutation AuthUser($email: String!, $password: String!) {
    authUser(email: $email, password: $password) {
      data {
        status
        errors {
          field
          message
        }
        user {
          email {
            address
          }
        }
      }
    }
  }
`
