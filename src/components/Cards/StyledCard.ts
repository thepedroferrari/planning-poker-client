import styled from "styled-components"

export const StyledCard = styled.label`
  background: whitesmoke;
  width: 32px;
  height: 48px;
  border-radius: 0.25rem;
  font-size: 16px;
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
    border-radius: 0.25rem;
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
