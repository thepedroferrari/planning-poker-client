import { TRoomNameUpdateData } from "types/room"
import { getFirstAndLastStartingLetters } from "./getFirstAndLastStartingLetters"

export const createAndSortRoomData = (data: TRoomNameUpdateData) =>
  [
    ...data.allRooms.map(({ name, lastUpdate }) => ({
      name,
      abbr: getFirstAndLastStartingLetters(name),
      lastUpdate,
    })),
  ].sort((a, b) => b.lastUpdate - a.lastUpdate)
