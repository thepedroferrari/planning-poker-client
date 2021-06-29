import { gql } from "@apollo/client"

export const POST_TOPIC = gql`
  mutation ($topicName: String!, $roomName: String!, $author: String!) {
    postTopic(topicName: $topicName, roomName: $roomName, author: $author)
  }
`
