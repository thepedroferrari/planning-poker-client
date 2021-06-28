import { useApolloClient } from "@apollo/client"
import { SUBSCRIBE_ROOM } from "queries/subscribeToRoom"
import { useEffect, useState } from "react"
import { store } from "store/store"
import { RoomData, SubsribeToRoomVariables } from "types/Room"

export const useMessageSubscription = (): RoomData | null => {
  const { selectedRoom } = store()
  const [room, setRoom] = useState<RoomData | null>(null)
  const client = useApolloClient()

  useEffect(() => {
    const observer = client.subscribe<RoomData, SubsribeToRoomVariables>({
      query: SUBSCRIBE_ROOM,
      variables: {
        name: selectedRoom,
      },
    })

    const subscription = observer.subscribe(({ data }) => {
      if (typeof data === "object" && data !== null) {
        setRoom(data)
        console.log("SUBSCRIBE received", data)
      }
    })

    return () => subscription.unsubscribe()
  }, [selectedRoom, client])

  return room
}
