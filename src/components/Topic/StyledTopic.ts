import styled, { css } from "styled-components"

type Props = {
  isEmpty?: boolean
}

export const StyledTopic = styled.section<Props>`
  grid-area: topic;
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  display: grid;
  grid-template-areas: "average title" "average votes";
  grid-template-columns: min-content 1fr;
  grid-template-rows: var(--base-size-x4) var(--base-size-x4);
  column-gap: var(--base-size);
  padding: var(--base-size);
  background: white;
  z-index: 1;
  height: var(--base-size-x10);

  .average-vote {
    display: inline-flex;
    grid-area: average;
    place-content: center;
    place-items: center;
    font-size: var(--h2);
    background: var(--dark);
    padding: 0 var(--base-size);
    height: var(--base-size-x8);
    color: var(--white);
  }

  .title {
    grid-area: title;
    margin: 0;
    line-height: 1;
    padding: 0;
    font-size: 1rem;
  }

  .votes {
    grid-area: votes;
    display: flex;
    gap: var(--base-size-half);
    overflow-x: scroll;
    width: 100%;
    > label {
      max-height: var(--base-size-x4);
      pointer-events: none;
    }
  }

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      filter: grayscale(100%);
    `}
`
