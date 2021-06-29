import styled from "styled-components"

export const StyledRoom = styled.article`
  background: white;
  display: grid;
  grid-template-areas: "topic" "messages" "send-message";
  min-height: calc(100vh - var(--header-height));
  max-height: calc(100vh - var(--header-height));
  grid-template-rows: 1fr auto;
  position: relative;
  overflow-y: scroll;
`
