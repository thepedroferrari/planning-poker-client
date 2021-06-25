import { Messages } from "components/Messages"
import { SendMessage } from "components/SendMessage"
import { StyledRoom } from "./StyledRoom"

type Props = {
  user: string
}

export const Room = ({ user }: Props) => {
  return (
    <StyledRoom>
      <Messages user={user} />
      <SendMessage />
    </StyledRoom>
  )
}
