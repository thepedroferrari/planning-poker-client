import { gql } from "@apollo/client"

export const GET_ROOM = gql`
  query ($name: String!) {
    room(name: $name) {
      owner
      name
      messages {
        content
        vote
        author
        date
      }
    }
  }
`
