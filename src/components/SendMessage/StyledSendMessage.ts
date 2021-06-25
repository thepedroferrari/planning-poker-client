import styled from "styled-components"

export const StyledSendMessage = styled.form`
  grid-area: send-message;
  display: grid;
  grid-template-areas: "textarea button";
  grid-template-columns: 1fr max-content;
  place-content: center;
  place-items: center;
  padding: 1rem;

  button {
    margin: 1em 0 1em 0.5em;
    align-self: end;
  }
`
