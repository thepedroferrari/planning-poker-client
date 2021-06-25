import { StyledButton } from "./StyledButton"

type Props = {
  children: React.ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: Props) => (
  <StyledButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={onClick}>
    {children}
  </StyledButton>
)
