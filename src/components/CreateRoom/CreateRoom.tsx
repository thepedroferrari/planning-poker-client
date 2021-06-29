import { Button } from "components/Button"
import { FormEvent } from "react"

export const CreateRoom = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="room-name">
        <span>Room Name</span>
        <input
          name="room-name"
          type="text"
          placeholder="PB&#38;J Discussions"
        />
      </label>
      <Button type="submit">Create</Button>
    </form>
  )
}
