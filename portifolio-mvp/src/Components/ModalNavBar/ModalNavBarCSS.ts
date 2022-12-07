import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 428px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 101%;
    right: -6.3%;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 129%;
    right: -6%;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 412px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 101%;
    right: -5.7%;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 393px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 103%;
    right: -5.2%;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 412px) {
    top: 129%;
    right: -5.8%;
  }

  /* @media screen and (max-width: 390px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 130%;
    right: -5.2%;
    width: 100%;
    height: 100%;
  } */

  @media screen and (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 133%;
    right: -4.5%;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 360px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 133%;
    right: -4%;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 136%;
    right: -2%;
    width: 100%;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.5%;
  align-items: center;

  margin: 13% 0% 0% 59%;

  width: 120px;
  height: 150px;

  background: transparent;

  border-radius: 5px;

  z-index: 100;

  a {
    display: flex;
    justify-content: center;

    width: 98%;
    height: 15%;

    border: 1px solid var(--color-orange);

    border-radius: 5px;

    color: var(--color-orange);

    background: var(--color-primary);

    cursor: pointer;

    span {
      display: flex;
      align-items: center;
      font-size: 19px;

      color: var(--color-white);
    }
  }
`;
