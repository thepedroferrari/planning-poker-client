import { createTrackedSelector } from "react-tracked"
import { TRoom } from "types/room"
import { TUser } from "types/user"
import create, { SetState } from "zustand"

import { Store } from "./storeTypes"

const appStore = create<Store>((set: SetState<Store>) => ({
  room: null,
  user: null,
  selectedRoom: "",

  setRoom: (room: TRoom) => set({ room }),
  setUser: (user: TUser | null) => set({ user }),
  setSelectedRoom: (selectedRoom: string) => set({ selectedRoom }),
}))

export const store = createTrackedSelector(appStore)
