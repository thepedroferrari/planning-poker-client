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
  max-height: 22.5vh;
  overflow-y: scroll;

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
    outline: solid 1px var(--blue);
    box-shadow: 0 0 4px 1px var(--blue);
    border-color: var(--blue);

    textarea:focus {
      outline: none;
    }
  }

  box-shadow: 0 0 4px rgba(90, 150, 250, 0.8);
`
