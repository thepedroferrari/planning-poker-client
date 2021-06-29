import { Card } from "components/Cards/Card"
import { TTopic } from "types/room"
import { getAverageFromArray } from "utils"
import { StyledTopic } from "./StyledTopic"

type Props = {
  topic: TTopic
}
export const Topic = ({ topic }: Props) => {
  const votes = topic.votes.map((vote) => Number(vote.vote))
  const averageVote = getAverageFromArray(votes)
  return (
    <StyledTopic>
      <div className="average-vote">{averageVote}</div>
      <h2 className="title">{topic.name}</h2>
      <div className="votes">
        {topic.votes.map((vote) => (
          <Card value={vote.vote} key={vote.author} />
        ))}
      </div>
    </StyledTopic>
  )
}
