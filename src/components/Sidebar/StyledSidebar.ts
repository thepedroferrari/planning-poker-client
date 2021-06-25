import styled from "styled-components"

export const StyledSidebar = styled.section`
  grid-area: sidebar;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background: lightgray;
  position: relative;
  & > div {
    top: 0;
    max-height: calc(100vh - var(--header-height));
    overflow-y: scroll;
    display: grid;
    align-items: flex-start;
    position: sticky;
  }
`
