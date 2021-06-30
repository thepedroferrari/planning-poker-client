import { gql } from "@apollo/client"

export const POST_MESSAGE = gql`
  mutation PostMessage(
    $author: String!
    $content: String!
    $vote: Float
    $roomName: String!
  ) {
    postMessage(
      author: $author
      content: $content
      vote: $vote
      roomName: $roomName
    )
  }
`
