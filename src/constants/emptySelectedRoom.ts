import { RoomData } from "types/room"

export const EMPTY_ROOM: RoomData = {
  room: {
    name: "",
    owner: "",
    messages: [],
    topics: [],
    lastUpdate: 0,
  },
}
