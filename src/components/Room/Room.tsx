import { Messages } from "components/Messages"
import { RouteWrapper } from "components/RouteWrapper"
import { SendMessage } from "components/SendMessage"
import { useEffect, useLayoutEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { store } from "store/store"
import { StyledRoom } from "./StyledRoom"

type TParams = { name: string }

export const Room = () => {
  const { name } = useParams<TParams>()
  const messagesRef = useRef<HTMLDivElement>(null)

  const { setSelectedRoom, user } = store()

  useEffect(() => {
    setSelectedRoom(name)
  }, [name, setSelectedRoom])

  const delayedScrollLastMessage = () => {
    setTimeout(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight
      }
    }, 100)
  }

  useLayoutEffect(() => {
    delayedScrollLastMessage()
  }, [messagesRef])

  return (
    <RouteWrapper>
      <StyledRoom>
        <Messages roomName={name} user={user} messagesRef={messagesRef} />
        <SendMessage
          author={user?.email.address}
          scroll={delayedScrollLastMessage}
        />
      </StyledRoom>
    </RouteWrapper>
  )
}
