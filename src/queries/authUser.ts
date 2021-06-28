import { gql } from "@apollo/client"

export const AUTH_USER = gql`
  mutation AuthUser {
    authUser(email: "pedro@pedroferrari.com", password: "pedroferrari") {
      data {
        status
        error {
          message
        }
        user {
          id
        }
      }
    }
  }
`
