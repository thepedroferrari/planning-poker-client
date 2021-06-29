import { TMessage } from "./message"

type Votes = {
  email: string
  vote: number
}

type Topic = {
  name: string
  votes: Votes[]
}

export type TRoom = {
  topics: Topic[]
  name: string
  owner: string // user email
  messages: TMessage[]
  lastUpdate: number
}

export type TRoomNameUpdate = Pick<TRoom, "lastUpdate" | "name">

export type TRoomNameUpdateData = {
  allRooms: TRoomNameUpdate[]
}

export type RoomData = {
  data: TRoom
}

export type SubsribeToRoomVariables = {
  name: string
}
