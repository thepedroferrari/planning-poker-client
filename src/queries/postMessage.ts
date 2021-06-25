import { gql } from "@apollo/client"

export const POST_MESSAGE = gql`
  mutation ($author: String!, $content: String!) {
    postMessage(author: $author, content: $content)
  }
`
