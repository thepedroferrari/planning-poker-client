import { useLazyQuery } from "@apollo/client"
import { CreateRoom } from "components/CreateRoom"
import { TEN_SECONDS_MS } from "constants/time"
import { GET_ALL_ROOMS } from "queries/getAllRooms"
import { useLayoutEffect, useRef } from "react"
import { store } from "store/store"
import { TRoomNameUpdate, TRoomNameUpdateData } from "types/room"
import { createAndSortRoomData } from "utils"
import { SidebarRoom } from "./SidebarRoom"
import { StyledSidebar } from "./StyledSidebar"

export const Sidebar = () => {
  const { user } = store()
  const [getRooms, { loading: isLoading, data }] =
    useLazyQuery<TRoomNameUpdateData>(GET_ALL_ROOMS, {})

  const rooms = useRef<(TRoomNameUpdate & { abbr: string })[]>([])

  useLayoutEffect(() => {
    getRooms()
    const timer = setInterval(() => {
      getRooms()
    }, TEN_SECONDS_MS)
    if (!data) return undefined

    rooms.current = createAndSortRoomData(data)

    return () => {
      clearInterval(timer)
    }
  }, [getRooms, data])

  if (isLoading) return <div>Loading...</div>

  const roomElements = rooms.current.map((room) => (
    <SidebarRoom
      key={room.name}
      name={room.name}
      abbr={room.abbr}
      lastUpdate={room.lastUpdate}
    />
  ))

  return (
    <StyledSidebar>
      <>{roomElements}</>
      {user ? <CreateRoom /> : <div>Login</div>}
    </StyledSidebar>
  )
}
