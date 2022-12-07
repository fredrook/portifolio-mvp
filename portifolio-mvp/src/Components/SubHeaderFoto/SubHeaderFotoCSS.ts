import styled from "styled-components";

export const HeaderFoto = styled.div`
  z-index: 99999;

  img {
    display: flex;

    border-radius: 50%;

    width: 95px;
    height: 82px;

    object-fit: cover;

    @media screen and (max-width: 390px) {
      width: 63px;
      height: 64px;
    }

    @media screen and (min-width: 375px) {
      width: 63px;
      height: 64px;
      }

    @media screen and (max-width: 360px) {
      width: 63px;
      height: 63px;
    }

    :hover {
      border: 2px solid var(--color-orange);
    }
  }
`;
