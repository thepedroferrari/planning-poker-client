import { gql } from "@apollo/client"

export const GET_ROOM = gql`
  query {
    messages {
      id
      author
      content
      date
      vote
    }
  }
`
