import styled, { css } from "styled-components"

type Props = {
  selected?: boolean
}
export const StyledSidebarRoom = styled.div<Props>`
  width: 100%;
  height: var(--base-size-x8);
  display: grid;
  grid-template-areas: "icon name" "icon time";
  grid-template-columns: var(--base-size-x8) 1fr;
  cursor: pointer;

  i {
    display: flex;
    font-style: normal;
    border-radius: 50%;
    background: white;
    width: var(--base-size-x6);
    height: var(--base-size-x6);
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.15);
    place-content: center;
    place-items: center;
    grid-area: icon;
    place-self: center;
  }
  span {
    grid-area: name;
    font-size: 1rem;
  }
  time {
    grid-area: time;
    font-size: 14px;
  }
  @media screen and (max-width: 30rem) {
    grid-template-areas: "icon";
    grid-template-columns: 1fr;
    span,
    time {
      display: none;
    }
  }
  ${({ selected }) =>
    selected
      ? css`
          background: lightseagreen;
        `
      : css`
          background: whitesmoke;
        `};
`
