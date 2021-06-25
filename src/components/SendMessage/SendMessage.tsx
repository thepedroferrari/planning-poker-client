import { Button } from "components/Button"
import { Cards } from "components/Cards"
import { ChangeEvent, FormEvent, useState } from "react"
import { StyledSendMessage } from "./StyledSendMessage"
import { StyledSendMessageInput } from "./StyledSendMessageInput"

export const SendMessage = () => {
  const [text, setText] = useState("")
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(text)
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
