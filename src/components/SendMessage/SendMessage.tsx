import { Button } from "components/Button"
import { ChangeEvent, useState } from "react"
import { StyledSendMessage } from "./StyledSendMessage"
import { StyledSendMessageInput } from "./StyledSendMessageInput"

export const SendMessage = () => {
  const [text, setText] = useState("")
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)
  return (
    <StyledSendMessage>
      <StyledSendMessageInput data-value={text}>
        <textarea onInput={handleInput} />
      </StyledSendMessageInput>
      <Button onClick={() => alert(text)}>Send »</Button>
    </StyledSendMessage>
  )
}
