import { createTrackedSelector } from "react-tracked"
import { TRoom } from "types/Room"
import { TUser } from "types/User"
import create, { SetState } from "zustand"

import { Store } from "./storeTypes"

const appStore = create<Store>((set: SetState<Store>) => ({
  room: null,
  user: null,
  selectedRoom: "",

  setRoom: (room: TRoom) => set({ room }),
  setUser: (user: TUser) => set({ user }),
  setSelectedRoom: (selectedRoom: string) => set({ selectedRoom }),
}))

export const store = createTrackedSelector(appStore)
