import { useSubscription } from "@apollo/client"
import { Message } from "components/Message/Message"
import { SUBSCRIBE_ROOM } from "queries/subscribeToRoom"
import { MutableRefObject } from "react"
import { MessagesData } from "types/Message"
import { StyledMessages } from "./StyledMessages"

type Props = {
  user: string
  messagesRef: MutableRefObject<HTMLDivElement | null>
}

export const Messages = ({ user, messagesRef }: Props) => {
  const { data } = useSubscription<MessagesData>(SUBSCRIBE_ROOM)
  if (!data) return null

  const messages = [...data.messages]

  const renderMessage = messages.map((m) => <Message message={m} isAuthor={m.author === user} key={m.id} />)

  return <StyledMessages ref={messagesRef}>{renderMessage}</StyledMessages>
}
