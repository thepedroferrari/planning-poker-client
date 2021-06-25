import { useMutation } from "@apollo/client"
import { Button } from "components/Button"
import { Cards } from "components/Cards"
import { POST_MESSAGE } from "queries/postMessage"
import { ChangeEvent, FormEvent, useState } from "react"
import { StyledSendMessage } from "./StyledSendMessage"
import { StyledSendMessageInput } from "./StyledSendMessageInput"

type Props = {
  author: string
}
export const SendMessage = ({ author }: Props) => {
  const [text, setText] = useState("")
  const [postMessage] = useMutation(POST_MESSAGE)
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.length > 0) {
      postMessage({
        variables: {
          author,
          content: text,
        },
      })
    }
  }

  return (
    <StyledSendMessage onSubmit={handleSubmit}>
      <Cards cards={[0.5, 1, 2, 3, 5, 7, 13, 21]} />
      <StyledSendMessageInput data-value={text}>
        <textarea onInput={handleInput} />
      </StyledSendMessageInput>
      <Button type="submit">
        <span>Send</span> <i>»</i>
      </Button>
    </StyledSendMessage>
  )
}
