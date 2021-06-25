import styled from "styled-components"

export const StyledSendMessage = styled.form`
  grid-area: send-message;
  display: grid;
  grid-template-areas: "deck deck" "textarea button";
  grid-template-columns: 1fr max-content;
  place-content: center;
  place-items: center;
  padding: 1rem;
  border-top: 1px solid lightgray;

  button {
    margin: 1em 0 1em 0.5em;
    align-self: end;
    i {
      font-style: normal;
    }
  }
  @media screen and (max-width: 30rem) {
    padding: 0.5rem;
    grid-template-columns: 1fr 56px;
    column-gap: 8px;

    button {
      justify-self: end;
      height: 100%;
      margin: 0;
      span {
        display: none;
      }
      i {
        font-size: 2rem;
      }
    }
  }
`
