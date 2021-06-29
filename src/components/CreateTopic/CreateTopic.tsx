import { useMutation } from "@apollo/client"
import { Button } from "components/Button"
import { POST_TOPIC } from "queries/postTopic"
import { ChangeEvent, FormEvent, useState } from "react"
import { StyledCreateTopic } from "./StyledCreateTopic"

type Props = {
  author: string
  roomName: string
}

export const CreateTopic = ({ author, roomName }: Props) => {
  const [createTopic] = useMutation(POST_TOPIC)
  const [topicName, setTopicName] = useState("")

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (topicName !== "") {
      await createTopic({
        variables: {
          roomName,
          author,
          topicName,
        },
      })
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTopicName(e.target.value)
  }

  return (
    <StyledCreateTopic onSubmit={onSubmit}>
      <label htmlFor="topic-name">
        <span>Set a new Topic</span>
        <input
          maxLength={32}
          name="topic-name"
          type="text"
          placeholder="Upgrading the time machine"
          onChange={handleChange}
        />
      </label>
      <Button type="submit">SET</Button>
    </StyledCreateTopic>
  )
}
