import { Card } from "components/Cards/Card"
import { TTopic } from "types/room"
import { getAverageFromArray } from "utils"
import { StyledTopic } from "./StyledTopic"

type Props = {
  topic: TTopic
  isEmpty?: boolean
}
export const Topic = ({ topic, isEmpty }: Props) => {
  const votes = topic.votes.map((vote) => Number(vote.vote))
  const averageVote = getAverageFromArray(votes)
  return (
    <StyledTopic isEmpty={isEmpty}>
      <div className="average-vote">{averageVote}</div>
      <h2 className="title">{topic.name}</h2>
      <div className="votes">
        {topic.votes.map((vote) => (
          <Card value={vote.vote} title={vote.author} key={vote.author} />
        ))}
      </div>
    </StyledTopic>
  )
}
