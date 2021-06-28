import { gql } from "@apollo/client"

export const GET_ALL_ROOMS = gql`
  query {
    allRooms {
      name
      lastUpdate
    }
  }
`
