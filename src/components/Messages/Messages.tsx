import { useQuery } from "@apollo/client"
import { Message } from "components/Message/Message"
import { GET_ROOM } from "queries/getRoom"
import { MessagesData } from "types/Message"
import { StyledMessages } from "./StyledMessages"

type Props = {
  user: string
}

export const Messages = ({ user }: Props) => {
  const { data } = useQuery<MessagesData>(GET_ROOM)
  if (!data) return null

  const messages = [...data.messages]

  const renderMessage = messages.map((m) => <Message message={m} isAuthor={m.author === user} />)

  return <StyledMessages>{renderMessage}</StyledMessages>
}
