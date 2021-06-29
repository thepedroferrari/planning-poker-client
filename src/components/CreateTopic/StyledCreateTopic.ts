import styled from "styled-components"

export const StyledCreateTopic = styled.form`
  padding: var(--base-size);
  grid-area: create-topic;
  display: grid;
  grid-template-columns: 1fr var(--base-size-x10);
  gap: var(--base-size);
  align-content: end;
  align-items: end;
  background: var(--light);
  label {
    display: grid;
    input {
      margin: 0;
    }
  }

  button {
    padding: var(--base-size);
    border-radius: var(--base-size-half);
    height: fit-content;
    margin: 0;
    font-size: var(--h5);
  }
`
