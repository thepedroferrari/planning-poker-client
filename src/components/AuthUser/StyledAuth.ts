import styled from "styled-components"

export const StyledAuth = styled.section`
  padding: var(--base-size-x2);

  p {
    margin: 0;
  }
  .cta {
    all: unset;
    display: inline-block;
    font-weight: bold;
    text-decoration: underline;
    font-style: italic;
    color: blue;
    margin-bottom: var(--margin);
    text-align: center;
    cursor: pointer;

    &.footer-cta {
      color: #2b2b2b;
      text-decoration: none;
      text-align: right;
      margin: 0;
      cursor: pointer;
      align-self: center;
      &:hover {
        color: blue;
        text-decoration: underline;
      }
    }
  }

  form {
    display: grid;
    label {
      display: grid;
    }
    button {
      align-self: center;
      margin-bottom: 0;
    }
    input {
      margin: 0;
    }
    .errors {
      margin-bottom: var(--margin);
      color: #b22;
    }

    footer {
      display: flex;
      place-self: end;
      gap: var(--base-size-x4);
      button {
        min-width: 120px;
      }

      @media screen and (max-width: 30rem) {
        gap: var(--base-size-x2);
      }
    }
  }
`
