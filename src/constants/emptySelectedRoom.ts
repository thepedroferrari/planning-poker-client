import { RoomData } from "types/room"

export const EMPTY_ROOM: RoomData = {
  data: {
    name: "",
    owner: "",
    messages: [],
    topics: [],
    lastUpdate: 0,
  },
}
