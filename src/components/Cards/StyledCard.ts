import styled from "styled-components"

export const StyledCard = styled.label`
  background: whitesmoke;
  width: var(--base-size-x3);
  height: var(--base-size-x6);
  border-radius: var(--base-size-half);
  font-size: var(--base-size-x2);
  justify-self: start;
  input {
    display: none;
  }
  .card {
    display: flex;
    place-content: center;
    place-items: center;
    height: 100%;
    width: 100%;
    border-radius: var(--base-size-half);
    box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  }
  input:checked + .card {
    background: rgb(50, 100, 200);
    color: white;
  }

  @media screen and (min-width: 30rem) {
    font-size: 20px;
  }
`
