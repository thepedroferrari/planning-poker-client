import { gql } from "@apollo/client"

export const SUBSCRIBE_ROOM = gql`
  subscription ($name: String!) {
    room(name: $name) {
      name
      owner
      messages {
        author
        content
        date
        vote
      }
      topics {
        name
        votes {
          author
          vote
        }
      }
      lastUpdate
    }
  }
`
