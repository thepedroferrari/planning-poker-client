import styled from "styled-components"

export const StyledRoom = styled.main`
  grid-area: room;
  background: white;
  display: grid;
  grid-template-areas: "messages" "send-message";
  grid-template-rows: 1fr minmax(max-content, 84px);
`
