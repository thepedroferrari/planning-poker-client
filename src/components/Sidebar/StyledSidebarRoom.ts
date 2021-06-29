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
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 1px;
    background: var(--light);
    left: 10%;
    bottom: 0;
  }
  &:hover {
    background: var(--blue);
    span,
    time {
      color: var(--white);
    }

    &::after {
      display: none;
    }
  }
  i {
    display: flex;
    font-style: normal;
    border-radius: 50%;
    background: white;
    width: var(--base-size-x6);
    height: var(--base-size-x6);
    box-shadow: var(--shadow-inner-heavy);
    place-content: center;
    place-items: center;
    grid-area: icon;
    place-self: center;
  }
  span {
    grid-area: name;
    font-size: 0.85rem;
    align-self: end;
    line-height: 1.1;
  }
  time {
    grid-area: time;
    font-size: 14px;
    align-self: start;
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
          background: var(--blue);
          border-left: 5px solid rgba(0, 0, 0, 0.15);
          &::after {
            display: none;
          }
          span,
          time {
            color: var(--white);
          }
        `
      : css`
          background: var(--white);
        `};
`
