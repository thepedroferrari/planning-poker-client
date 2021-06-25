import styled from "styled-components"

export const StyledRoom = styled.main`
  grid-area: room;
  background: white;
  display: grid;
  grid-template-areas: "messages" "send-message";
  min-height: calc(100vh - var(--header-height));
  max-height: calc(100vh - var(--header-height));
  grid-template-rows: 1fr auto;
`
