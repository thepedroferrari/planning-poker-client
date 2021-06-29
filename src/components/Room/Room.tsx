import { CreateTopic } from "components/CreateTopic"
import { Messages } from "components/Messages"
import { RouteWrapper } from "components/RouteWrapper"
import { SendMessage } from "components/SendMessage"
import { Topic } from "components/Topic/Topic"
import { EMPTY_TOPIC } from "constants/emptyTopic"
import { useEffect, useLayoutEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { store } from "store/store"
import { StyledRoom } from "./StyledRoom"

type TParams = { name: string }

export const Room = () => {
  const { name } = useParams<TParams>()
  const { room } = store()
  const messagesRef = useRef<HTMLDivElement>(null)

  const { setSelectedRoom, user } = store()
  const userEmail = user?.email.address

  useEffect(() => {
    setSelectedRoom(name)
  }, [name, setSelectedRoom])

  let scrollTimer: NodeJS.Timeout
  const delayedScrollLastMessage = () => {
    scrollTimer = setTimeout(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight
      }
    }, 100)
  }

  useLayoutEffect(() => {
    delayedScrollLastMessage()

    return () => {
      clearTimeout(scrollTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messagesRef])

  const lastTopic = room?.topics[room.topics.length - 1]
  if (!room)
    return (
      <RouteWrapper>
        <div>Room does not exist.</div>
      </RouteWrapper>
    )

  const isOwner = room?.owner === userEmail

  return (
    <RouteWrapper>
      <StyledRoom>
        {lastTopic ? (
          <Topic topic={lastTopic} />
        ) : (
          <Topic topic={EMPTY_TOPIC} isEmpty />
        )}
        <Messages roomName={name} user={user} messagesRef={messagesRef} />
        {isOwner && <CreateTopic author={userEmail!} roomName={room.name} />}
        <SendMessage
          author={user?.email.address}
          scroll={delayedScrollLastMessage}
        />
      </StyledRoom>
    </RouteWrapper>
  )
}
