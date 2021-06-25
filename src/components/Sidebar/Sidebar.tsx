import { StyledSidebar } from "./StyledSidebar"
import { StyledSidebarRoom } from "./StyledSidebarRoom"

type Props = {
  user: string
}

const fakeRooms = [
  "Front End",
  "Customer Acquisition",
  "Customer Payments",
  "Search Engine Optimization",
  "Customer Satisfaction",
  "General Infrastructure",
  "Big Data",
  "Machine Learning",
  "Bird Watchers",
  "Save Endangered Animals",
  "Be nice to people",
  "Have Discipline",
  "Enjoy yourself",
  "Never quit",
]

const getFirstAndLastStartingLetters = (s: string) => {
  const words = s.split(" ")
  const firstLetter = words[0].charAt(0)
  const lastLetter = words[words.length - 1].charAt(0)

  return `${firstLetter}${lastLetter}`.toUpperCase()
}

export const Sidebar = ({ user }: Props) => {
  const rooms = [
    ...fakeRooms.map((room) => ({
      name: room,
      abbr: getFirstAndLastStartingLetters(room),
    })),
  ]

  const roomElements = rooms.map((room, i) => (
    <StyledSidebarRoom selected={i === 0}>
      <span>{room.name}</span>
      <i title={room.name}>{room.abbr}</i>
    </StyledSidebarRoom>
  ))
  return user !== "Pedro Ferrari" ? null : (
    <StyledSidebar>
      <div>{roomElements}</div>
    </StyledSidebar>
  )
}
