import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  .ICB {
    width: 100%;
    height: 80%;
    position: relative;
    top: 23%;
    align-items: center;

    z-index: -9999;

    pointer-events: none;
    animation-name: IceBergFlutuante;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
  }

  .Ondas {
    width: 100%;
    height: 80%;
    position: fixed;
    top: 20%;
    align-items: center;

    z-index: -9999;
  }

  @keyframes IceBergFlutuante {
    0% {
      transform: translateY(55px);
      filter: drop-shadow(rgb(	251	195	139) -2px -35px 20px);
    }
    50% {
      transform: translateY(40px);
      filter: drop-shadow(rgba(255, 104 ,0, -0.5) -2px -35px 20px);
    }
    100% {
      transform: translateY(55px);
      filter: drop-shadow(rgb(	251	195	139) -2px -35px 20px);
    }
  }

  @media screen and (min-height: 800px) {
    height: 800px;
  }
`;
