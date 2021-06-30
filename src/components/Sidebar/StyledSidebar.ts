import styled from "styled-components"

export const StyledSidebar = styled.nav`
  grid-area: sidebar;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background: var(--white);
  border-right: 1px solid var(--light);
  position: relative;
  & > div {
    top: 0;
    max-height: calc(100vh - var(--header-height));
    overflow-y: scroll;
    display: grid;
    align-items: flex-start;
    position: sticky;
  }
  button {
    text-align: center;
    display: flex;
    place-content: center;
    margin: var(--base-size-x2) auto 0 auto;
    @media screen and (max-width: 30rem) {
      font-size: 14px;
      padding: var(--base-size-half) var(--base-size-quarter);
      width: var(--base-size-x8);
    }
  }
`
