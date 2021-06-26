import { Messages } from "components/Messages"
import { SendMessage } from "components/SendMessage"
import { useRef, useEffect } from "react"
import { StyledRoom } from "./StyledRoom"

type Props = {
  user: string
}

export const Room = ({ user }: Props) => {
  const messagesRef = useRef<HTMLDivElement>(null)
  const delayedScrollLastMessage = () => {
    setTimeout(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight
      }
    }, 100)
  }

  useEffect(() => {
    delayedScrollLastMessage()
  }, [messagesRef])

  return (
    <StyledRoom>
      <Messages user={user} messagesRef={messagesRef} />
      <SendMessage author={user} scroll={delayedScrollLastMessage} />
    </StyledRoom>
  )
}
