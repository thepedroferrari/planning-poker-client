import { motion } from "framer-motion"
import styled, { css } from "styled-components"

type Props = {
  isAuthor: boolean
}
export const StyledMessage = styled(motion.blockquote)<Props>`
  background: ${({ isAuthor }) => (isAuthor ? css`green` : css`gray`)};
`
