import { Dispatch, SetStateAction } from "react"
import { Card } from "./Card"
import { StyledCards } from "./StyledCards"

type Props = {
  cards: number[]
  setVote: Dispatch<SetStateAction<number | undefined>>
}

export const Cards = ({ cards, setVote }: Props) => {
  const deck = cards.map((card) => (
    <Card value={card} key={card} setVote={setVote} />
  ))
  return <StyledCards>{deck}</StyledCards>
}
