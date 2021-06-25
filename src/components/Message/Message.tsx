import { TMessage } from "types/Message"
import { getTimeFromDate } from "utils"
import { StyledMessage } from "./StyledMessage"

type Props = {
  message: TMessage
  isAuthor: boolean
}

export const Message = ({ message, isAuthor }: Props) => (
  <StyledMessage
    cite={`${process.env.REACT_APP_PUBLIC_URL}/rooms/Frontend`}
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
