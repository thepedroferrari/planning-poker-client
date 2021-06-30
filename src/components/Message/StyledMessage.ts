import { motion } from "framer-motion"
import styled, { css } from "styled-components"

type Props = {
  isAuthor: boolean
}
export const StyledMessage = styled(motion.blockquote)<Props>`
  color: var(--white);
  display: flex;
  flex-direction: column;
  max-width: 60%;
  width: fit-content;
  padding: var(--base-size) var(--base-size-x2);
  position: relative;
  margin-top: 2em;
  position: relative;
  .vote {
    background: var(--white);
    z-index: 1;
    position: absolute;
    right: calc(var(--base-size-x2) * -1);
    top: calc(var(--base-size-x2) * -1);
    background: var(--white);
    border: 1px solid var(--blue);
    color: var(--dark);
    border-radius: 50%;
    width: var(--base-size-x4);
    height: var(--base-size-x4);
    display: flex;
    place-items: center;
    place-content: center;
  }

  &::before {
    position: absolute;
    display: block;
    width: var(--base-size);
    height: var(--base-size);
    bottom: 0;
    left: -2px;
    background: var(--blue);
    content: " ";
    transform: rotate(-10deg) skew(-35deg);
  }

  ${({ isAuthor }) =>
    isAuthor
      ? css`
          background: var(--dark);
          align-self: flex-end;
          align-items: flex-end;
          border-radius: 1em 1em 0 1em;
          .vote {
            right: unset;
            left: calc(var(--base-size-x2) * -1);
            border: 1px solid var(--dark);
            color: var(--dark);
          }
          &::before {
            background: var(--dark);
            left: unset;
            right: -2px;
            transform: rotate(10deg) skew(35deg);
          }
        `
      : css`
          background: var(--blue);
          align-self: flex-start;
          align-items: flex-start;
          border-radius: 1em 1em 1em 0;
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
