import { Message } from "components/Message/Message"
import { MutableRefObject } from "react"
import { TMessage } from "types/message"
import { TUser } from "types/user"
import { StyledMessages } from "./StyledMessages"

type Props = {
  user: TUser | null
  messagesRef: MutableRefObject<HTMLDivElement | null>
  roomName: string
}

export const Messages = ({ user, messagesRef, roomName }: Props) => {
  const messages: TMessage[] = []

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
