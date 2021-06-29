import { useHistory } from "react-router-dom"
import { store } from "store/store"
import { format } from "timeago.js"
import { StyledSidebarRoom } from "./StyledSidebarRoom"

type Props = {
  abbr: string
  lastUpdate: number
  name: string
}

export const SidebarRoom = ({ name, lastUpdate, abbr }: Props) => {
  const { selectedRoom, setSelectedRoom } = store()
  const history = useHistory()

  const handleClick = () => {
    setSelectedRoom(name)
    history.push(`/room/${name}`)
  }

  return (
    <StyledSidebarRoom
      selected={selectedRoom === name}
      key={name}
      onClick={handleClick}>
      <span>{name}</span>
      <i title={name}>{abbr}</i>
      <time>{format(lastUpdate)}</time>
    </StyledSidebarRoom>
  )
}
