import styled from "styled-components"

export const StyledCard = styled.label`
  background: var(--white);
  width: var(--base-size-x4);
  height: var(--base-size-x5);
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
    background: var(--blue);
    color: white;
  }

  @media screen and (min-width: 30rem) {
    width: var(--base-size-x4);
    font-size: 20px;
  }
`
