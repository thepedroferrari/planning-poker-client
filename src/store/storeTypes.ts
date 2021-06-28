import { TRoom } from "types/Room"
import { TUser } from "types/User"

export type Store = {
  room: TRoom | null
  user: TUser | null
  selectedRoom: string

  setRoom: (room: TRoom) => void
  setUser: (user: TUser) => void
  setSelectedRoom: (selectedRoom: string) => void
}
