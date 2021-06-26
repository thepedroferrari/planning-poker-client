import { gql } from "@apollo/client"

export const SUBSCRIBE_ROOM = gql`
  subscription {
    messages {
      id
      author
      content
      date
      vote
    }
  }
`
