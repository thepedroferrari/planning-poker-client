import styled from "styled-components"

export const StyledApp = styled.div`
  display: grid;
  grid-template-areas: "header header" "sidebar room";
  grid-template-columns: 200px 1fr;
  grid-template-rows: var(--header-height) 1fr;

  @media screen and (max-width: 30rem) {
    grid-template-columns: 77px 1fr;
  }
`
