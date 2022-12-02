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
  }

  .TextFrontEnd {
    bottom: 60px;
    position: relative;
    margin-top: 109px;
    margin-left: 76px;
    width: 675px;
    height: 323px;

    h2 {
      font-weight: 400;
      font-size: 1.49em;
      line-height: 40px;
      text-align: justify;
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
