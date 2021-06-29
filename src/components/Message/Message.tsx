import { TMessage } from "types/message"
import { getTimeFromDate } from "utils"
import { StyledMessage } from "./StyledMessage"

type Props = {
  message: TMessage
  isAuthor: boolean
  roomName: string
}

export const Message = ({ message, isAuthor, roomName }: Props) => (
  <StyledMessage
    cite={`${process.env.REACT_APP_PUBLIC_URL}/rooms/${roomName}`}
    isAuthor={isAuthor}
    key={message.id}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{
      opacity: { duration: 0.33, type: "tween" },
    }}>
    <time>{getTimeFromDate(message.date)}</time>
    <figcaption>{message.author}</figcaption>
    <p>{message.content}</p>
  </StyledMessage>
)
