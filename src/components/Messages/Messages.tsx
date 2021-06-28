import { Message } from "components/Message/Message"
import { MutableRefObject } from "react"
import { TMessage } from "types/Message"
import { StyledMessages } from "./StyledMessages"

type Props = {
  user: string
  messagesRef: MutableRefObject<HTMLDivElement | null>
}

export const Messages = ({ user, messagesRef }: Props) => {
  const messages: TMessage[] = []

  const renderMessage = messages.map((m) => (
    <Message message={m} isAuthor={m.author === user} key={m.id} />
  ))

  return <StyledMessages ref={messagesRef}>{renderMessage}</StyledMessages>
}
