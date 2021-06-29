import { useQuery } from "@apollo/client"
import { CreateRoom } from "components/CreateRoom"
import { GET_ALL_ROOMS } from "queries/getAllRooms"
import { useEffect, useRef } from "react"
import { store } from "store/store"
import { TRoomNameUpdate, TRoomNameUpdateData } from "types/room"
import { getFirstAndLastStartingLetters } from "utils"
import { SidebarRoom } from "./SidebarRoom"
import { StyledSidebar } from "./StyledSidebar"

export const Sidebar = () => {
  const { user } = store()
  const {
    loading: isLoading,
    error,
    data,
  } = useQuery<TRoomNameUpdateData>(GET_ALL_ROOMS, {
    pollInterval: 5000,
  })

  const rooms = useRef<(TRoomNameUpdate & { abbr: string })[]>([])

  useEffect(() => {
    if (!data) return
    rooms.current = [
      ...data.allRooms.map(({ name, lastUpdate }) => ({
        name,
        abbr: getFirstAndLastStartingLetters(name),
        lastUpdate,
      })),
    ].sort((a, b) => b.lastUpdate - a.lastUpdate)
  }, [data])

  if (isLoading || !data || error) return null

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
      {user ? <CreateRoom /> : <div>LOGIN</div>}
    </StyledSidebar>
  )
}
