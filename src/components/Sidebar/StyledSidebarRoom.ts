import styled, { css } from "styled-components"

type Props = {
  selected?: boolean
}
export const StyledSidebarRoom = styled.div<Props>`
  width: 100%;
  height: 64px;
  display: flex;
  place-content: center;
  place-items: center;

  i {
    display: none;
    border-radius: 50%;
    background: white;
    width: 48px;
    height: 48px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.15);
    place-content: center;
    place-items: center;
  }
  ${({ selected }) =>
    selected
      ? css`
          background: lightseagreen;
        `
      : css`
          background: whitesmoke;
        `};
  @media screen and (max-width: 30rem) {
    i {
      display: flex;
      font-style: normal;
    }
    span {
      display: none;
    }
  }
`
