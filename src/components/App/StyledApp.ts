import styled from "styled-components"

export const StyledApp = styled.div`
  display: grid;
  grid-template-areas: "header header" "sidebar main";
  grid-template-columns: 300px 1fr;
  grid-template-rows: var(--header-height) 1fr;

  @media screen and (max-width: 60rem) {
    grid-template-columns: 200px 1fr;
  }
  @media screen and (max-width: 30rem) {
    grid-template-columns: 77px 1fr;
  }
`
