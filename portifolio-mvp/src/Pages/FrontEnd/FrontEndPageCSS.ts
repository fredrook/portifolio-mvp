import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  .DivIcons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 10vh;
    margin-bottom: 8.5%;

    @media screen and (max-width: 2560px) {
      margin-bottom: 14.5%;
    }

    @media screen and (max-width: 1440px) {
      margin-bottom: 9.5%;
      margin-left: 1.5%;
    }

    img {
      width: 90px;
      height: 90px;
    }

    .TS {
      width: 80px;
      height: 83px;
    }

    .Node {
      width: 95px;
      height: 95px;
    }

    .MUi {
      width: 105px;
      height: 105px;
    }

    .BST {
      width: 115px;
      height: 95px;
    }

    .Chk {
      width: 88px;
      height: 88px;
    }

    .ReactIcon {
      position: relative;
      bottom: 55%;
      left: 1%;
      width: 225px;
      height: 20vh;
      pointer-events: none;
      animation: ReactRotate infinite 20s linear;
    }
  }

  span {
    position: relative;
    bottom: 75px;
    left: 76px;
    font-weight: 400;
    font-size: 2em;
    line-height: 44px;
    text-decoration: underline;
    color: var(--color-orange);
    font-family: "Allerta", sans-serif;

    @media screen and (max-width: 2560px) {
      left: 115px;
      font-weight: 400;
      font-size: 2.5em;
      line-height: 44px;
    }

    @media screen and (max-width: 1440px) {
      bottom: 40px;
      left: 63px;
      font-weight: 400;
      font-size: 2.3em;
      line-height: 44px;
    }
  }

  .TextFrontEnd {
    position: relative;
    bottom: 60px;
    margin-top: 109px;
    margin-left: 76px;
    width: 675px;
    height: 323px;

    @media screen and (max-width: 2560px) {
      position: relative;
      bottom: 120px;
      left: 1.5%;
    }

    @media screen and (max-width: 1440px) {
      position: relative;
      bottom: 40px;
      left: -0.7%;
      width: 530px;
      height: 323px;
    }

    h2 {
      font-weight: 400;
      font-size: 1.49em;
      line-height: 40px;
      text-align: justify;
      font-family: "Alice", serif;

      @media screen and (max-width: 2560px) {
        font-size: 2em;
        font-family: "Alice", serif;
      }

      @media screen and (max-width: 1440px) {
        font-size: 1.49em;
        font-family: "Alice", serif;
      }
    }
  }

  @keyframes ReactRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
