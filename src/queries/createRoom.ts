import { gql } from "@apollo/client"

export const CREATE_ROOM = gql`
  mutation ($name: String!, $owner: String!) {
    createRoom(name: $name, owner: $owner) {
      data {
        status
        error {
          field
          message
        }
        room {
          name
        }
      }
    }
  }
`
