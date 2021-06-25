import { Card } from "./Card"
import { StyledCards } from "./StyledCards"

type Props = {
  cards: number[]
}

export const Cards = ({ cards }: Props) => {
  const deck = cards.map((card) => <Card value={card} />)
  return <StyledCards>{deck}</StyledCards>
}
