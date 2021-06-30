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
    key={message.id ? message.id.toString() : message.date.toString()}
    animate={{ opacity: 1, left: 0 }}
    initial={isAuthor ? { opacity: 0, left: 200 } : { opacity: 0, left: -200 }}
    transition={{
      opacity: { duration: 0.25, type: "tween" },
    }}>
    <span className="vote">{message.vote ? message.vote : "-"}</span>
    <time>{getTimeFromDate(message.date)}</time>
    <figcaption>{message.author}</figcaption>
    <p>{message.content}</p>
  </StyledMessage>
)
