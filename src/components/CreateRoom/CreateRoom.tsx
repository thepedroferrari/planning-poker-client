import { useMutation } from "@apollo/client"
import { Button } from "components/Button"
import { RouteWrapper } from "components/RouteWrapper"
import { CREATE_ROOM } from "queries/createRoom"
import { ChangeEvent, FormEvent, useState } from "react"
import { useHistory } from "react-router-dom"
import { store } from "store/store"
import { TNewRoomData } from "types/room"
import { StyledCreateRoom } from "./StyledCreateRoom"

export const CreateRoom = () => {
  const [createRoom] = useMutation<TNewRoomData>(CREATE_ROOM)
  const history = useHistory()
  const [roomName, setRoomName] = useState("")
  const { user } = store()

  if (!user)
    return <RouteWrapper>You must be logged in to create a room.</RouteWrapper>

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (roomName !== "" && user?.email.address) {
      const newRoom = await createRoom({
        variables: {
          name: roomName,
          owner: user.email.address,
        },
      })
      const newRoomName = newRoom.data?.createRoom.data.room?.name
      if (newRoomName) {
        history.push(`/room/${newRoomName}`)
      }
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value)
  }

  return (
    <RouteWrapper>
      <StyledCreateRoom onSubmit={onSubmit}>
        <label htmlFor="room-name">
          <span>Create a new Room</span>
          <input
            name="room-name"
            type="text"
            placeholder="PB&#38;J Discussions"
            maxLength={16}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Create</Button>
      </StyledCreateRoom>
    </RouteWrapper>
  )
}
