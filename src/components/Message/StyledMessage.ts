import { motion } from "framer-motion"
import styled, { css } from "styled-components"

type Props = {
  isAuthor: boolean
}
export const StyledMessage = styled(motion.blockquote)<Props>`
  background: ${({ isAuthor }) => (isAuthor ? css`green` : css`gray`)};
  color: black;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  width: fit-content;
  padding: 0 1rem 0.25em;
  position: relative;
  margin-top: 2em;

  ${({ isAuthor }) =>
    isAuthor
      ? css`
          background: greenyellow;
          align-self: flex-start;
          align-items: flex-start;
          border-radius: 1em 1em 1em 0;
        `
      : css`
          background: lightgray;
          align-self: flex-end;
          align-items: flex-end;
          border-radius: 1em 1em 0 1em;
        `}

  time {
    position: absolute;
    font-weight: 300;
    font-size: 0.6em;
    top: -1.5em;
    color: gray;
  }
  figcaption {
    font-size: 0.8em;
    font-weight: bold;
  }

  p {
    margin: 0;
  }
`
