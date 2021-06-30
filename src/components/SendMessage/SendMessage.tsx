import { useMutation } from "@apollo/client"
import { Button } from "components/Button"
import { Cards } from "components/Cards"
import { POST_MESSAGE } from "queries/postMessage"
import { ChangeEvent, FormEvent, useState } from "react"
import { StyledSendMessage } from "./StyledSendMessage"
import { StyledSendMessageInput } from "./StyledSendMessageInput"

type Props = {
  roomName: string
  author?: string
  scroll: () => void
}
export const SendMessage = ({ author, scroll, roomName }: Props) => {
  const [text, setText] = useState("")
  const [vote, setVote] = useState<number | undefined>(undefined)
  const [postMessage] = useMutation(POST_MESSAGE)

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!author) {
      alert("Please Login to send messages")
      return
    }
    if (text.length > 0) {
      if (vote) {
        await postMessage({
          variables: {
            author,
            content: text,
            vote,
            roomName,
          },
        })
      } else {
        await postMessage({
          variables: {
            author,
            content: text,
            roomName,
          },
        })
      }
      setText("")
      scroll()
    }
  }

  return (
    <StyledSendMessage onSubmit={handleSubmit}>
      <Cards cards={[0.5, 1, 2, 3, 5, 7, 13, 21]} setVote={setVote} />
      <StyledSendMessageInput data-value={text}>
        <textarea onInput={handleInput} value={text} />
      </StyledSendMessageInput>
      <Button type="submit">
        <span>Send</span> <i>»</i>
      </Button>
    </StyledSendMessage>
  )
}
