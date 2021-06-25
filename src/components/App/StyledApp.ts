import styled from "styled-components"

export const StyledApp = styled.div`
  display: grid;
  grid-template-areas: "header header" "sidebar room";
  grid-template-columns: clamp(3.5rem, calc(3.5rem + ((1vw - 0.2rem) * 14.6875)), 9.375rem);
  grid-template-rows: 80px 1fr;
  min-height: 100vh;
`
