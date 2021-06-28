import { RoomData } from "types/Room"

export const EMPTY_ROOM: RoomData = {
  data: {
    name: "",
    owner: "",
    messages: [],
    topics: [],
    lastUpdate: 0,
  },
}
