import styled from "styled-components"

export const StyledRoom = styled.article`
  background: white;
  display: grid;
  grid-template-areas: "topic" "messages" "create-topic" "send-message";
  min-height: calc(100vh - var(--header-height));
  max-height: calc(100vh - var(--header-height));
  grid-template-rows: max-content 1fr auto auto;
  position: relative;
  overflow-y: scroll;
`
