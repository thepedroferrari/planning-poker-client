import styled from "styled-components"

export const StyledCreateRoom = styled.form`
  padding: var(--base-size);
  font-size: var(--base-size-x2);
  display: grid;

  input {
    padding: var(--base-size-half);
    margin-bottom: var(--base-size);
    width: 100%;
  }
  button {
    padding: var(--base-size) var(--base-size-x4);
    font-size: 0.85rem;
    border-radius: var(--base-size-half);
    max-width: fit-content;
    justify-self: end;
  }
`
