import { useQuery } from "@apollo/client"
import { GET_ALL_ROOMS } from "queries/getAllRooms"
import { useEffect, useRef } from "react"
import { TRoomNameUpdate, TRoomNameUpdateData } from "types/Room"
import { getFirstAndLastStartingLetters } from "utils"
import { SidebarRoom } from "./SidebarRoom"
import { StyledSidebar } from "./StyledSidebar"

type Props = {
  user: string
}

export const Sidebar = ({ user }: Props) => {
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

  return user !== "Pedro Ferrari" ? null : (
    <StyledSidebar>{roomElements}</StyledSidebar>
  )
}
