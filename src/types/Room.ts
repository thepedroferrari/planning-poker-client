import { TError } from "./error"
import { TMessage } from "./message"

type Votes = {
  author: string
  vote: number
}

export type TTopic = {
  name: string
  votes: Votes[]
}

export type TRoom = {
  topics: TTopic[]
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
  room: TRoom
}

export type SubsribeToRoomVariables = {
  name: string
}

export type TNewRoomData = {
  createRoom: {
    data: {
      status: string
      errors?: TError
      room?: TRoom
    }
  }
}
