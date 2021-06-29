import { Message } from "components/Message/Message"
import { MutableRefObject } from "react"
import { store } from "store/store"
import { TMessage } from "types/message"
import { TUser } from "types/user"
import { StyledMessages } from "./StyledMessages"

type Props = {
  user: TUser | null
  messagesRef: MutableRefObject<HTMLDivElement | null>
  roomName: string
}

export const Messages = ({ user, messagesRef, roomName }: Props) => {
  const { room } = store()

  // Since the store updates child components directly when the variables that
  // they're using are updated, we do not need to handle side-effects here :)
  const messages: TMessage[] = room?.messages || []

  const renderMessage = messages.map((m) => (
    <Message
      isAuthor={m.author === user?.email.address}
      key={m.id}
      message={m}
      roomName={roomName}
    />
  ))

  return <StyledMessages ref={messagesRef}>{renderMessage}</StyledMessages>
}
