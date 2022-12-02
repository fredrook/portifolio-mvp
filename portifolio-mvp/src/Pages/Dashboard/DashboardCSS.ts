import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ICB {
    width: 100%;
    height: 78%;
    position: fixed;
    top: 16%;
    align-items: center;

    z-index: -9999;

    pointer-events: none;
    animation-name: IceBergFlutuante;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;

    @media screen and (max-width: 428px) {
      height: 50%;
      top: 25.5%;
    }

    @media screen and (max-width: 412px) {
      height: 45%;
      top: 31%;
    }

    @media screen and (max-width: 393px) {
      height: 45%;
      top: 30.5%;
    }

    @media screen and (max-width: 390px) {
      height: 42%;
      top: 31%;
    }

    @media screen and (max-width: 375px) {
      height: 41%;
      top: 28.6%;
    }

    @media screen and (max-width: 360px) {
      height: 41%;
      top: 29.1%;
    }

    @media screen and (max-width: 320px) {
      height: 40%;
      top: 26.5%;
    }
  }

  .Ondas {
    width: 100%;
    height: 80%;
    position: fixed;
    top: 20%;
    align-items: center;

    z-index: -9999;

    @media screen and (max-width: 425px) {
      height: 45%;
      top: 36%;
    }

    @media screen and (max-width: 375px) {
      height: 35%;
      top: 37%;
    }

    @media screen and (max-width: 320px) {
      height: 30%;
      top: 39%;
    }
  }

  @keyframes IceBergFlutuante {
    0% {
      transform: translateY(55px);
      filter: drop-shadow(rgb(251 195 139) -2px -35px 20px);
    }
    50% {
      transform: translateY(40px);
      filter: drop-shadow(rgba(255, 104, 0, -0.5) -2px -35px 20px);
    }
    100% {
      transform: translateY(55px);
      filter: drop-shadow(rgb(251 195 139) -2px -35px 20px);
    }
  }
`;
