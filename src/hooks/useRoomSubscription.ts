import { useApolloClient } from "@apollo/client"
import { SUBSCRIBE_ROOM } from "queries/subscribeToRoom"
import { useEffect } from "react"
import { store } from "store/store"
import { RoomData, SubsribeToRoomVariables } from "types/room"

export const useRoomSubscription = () => {
  const { selectedRoom, setRoom } = store()

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
        setRoom(data.room)
      }
    })

    return () => subscription.unsubscribe()
  }, [selectedRoom, client, setRoom])
}
