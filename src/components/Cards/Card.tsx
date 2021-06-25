import { StyledCard } from "./StyledCard"

type Props = {
  value: number
}
export const Card = ({ value }: Props) => (
  <StyledCard>
    <input type="radio" name="cards" />
    <div className="card">{value}</div>
  </StyledCard>
)
