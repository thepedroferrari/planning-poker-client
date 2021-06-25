import styled from "styled-components"

export const StyledSendMessageInput = styled.label`
  display: inline-grid;
  grid-area: textarea;
  border: solid 1px gray;
  padding: 0.25em 0.5em;
  padding: 0.5em;
  align-items: stretch;
  width: 100%;
  line-height: 1.1;
  font-size: 1em;

  &::after,
  textarea {
    min-width: 1em;
    grid-area: 1 / -1;
    font: inherit;
    padding: 0.25em;
    margin: 0;
    resize: none;
    background: none;
    appearance: none;
    border: none;
  }

  &::after {
    content: attr(data-value) " ";
    visibility: hidden;
    white-space: pre-wrap;
  }

  &:focus-within {
    outline: solid 1px rgb(50, 100, 200);
    box-shadow: 0 0 4px 1px rgb(50, 100, 200);
    border-color: rgb(50, 100, 200);

    textarea:focus {
      outline: none;
    }
  }

  box-shadow: 0 0 4px rgba(50, 100, 200, 0.8);
`
