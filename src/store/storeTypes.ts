import { TRoom } from "types/room"
import { TUser } from "types/user"

export type Store = {
  room: TRoom | null
  user: TUser | null
  selectedRoom: string

  setRoom: (room: TRoom) => void
  setUser: (user: TUser | null) => void
  setSelectedRoom: (selectedRoom: string) => void
}
