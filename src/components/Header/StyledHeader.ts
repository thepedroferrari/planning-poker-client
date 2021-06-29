import styled from "styled-components"

export const StyledHeader = styled.header`
  grid-area: header;
  color: white;
  background-color: rgba(50, 100, 200);
  padding: 0.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  place-items: center;
  place-content: center;
  i {
    margin-right: 1rem;
  }
  h1 {
    font-size: 1.6rem;
    line-height: 1;
    margin: 0;
    display: flex;
  }
  button {
    background: none;
    border: 1px solid white;
    width: max-content;
    padding: var(--base-size);
    justify-self: end;
    margin: 0;
    color: white;
    font-size: var(--base-size-x2);
  }
`
