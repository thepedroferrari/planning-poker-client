import { Dispatch, SetStateAction } from "react"
import { StyledCard } from "./StyledCard"

type Props = {
  value: number
  setVote?: Dispatch<SetStateAction<number | undefined>>
  title?: string
}
export const Card = ({ value, setVote, title }: Props) => (
  <StyledCard onClick={() => setVote && setVote(value)} title={title}>
    <input type="radio" name="cards" disabled={!!title} />
    <div className="card">{value}</div>
  </StyledCard>
)
