import { store } from "store/store"
import { format } from "timeago.js"
import { StyledSidebarRoom } from "./StyledSidebarRoom"

type Props = {
  abbr: string
  lastUpdate: number
  name: string
}

export const SidebarRoom = ({ name, lastUpdate, abbr }: Props) => {
  const { selectedRoom } = store()

  return (
    <StyledSidebarRoom selected={selectedRoom === name} key={name}>
      <span>{name}</span>
      <i title={name}>{abbr}</i>
      <time>{format(lastUpdate)}</time>
    </StyledSidebarRoom>
  )
}
