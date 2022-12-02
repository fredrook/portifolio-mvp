import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  aspect-ratio: auto 1 / 1;
`;

export const TextApresentationDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 700px;
  height: 350px;

  position: absolute;
  top: 11%;
  left: 4%;

  @media screen and (min-width: 2560px) {
    top: 15%;
    left: 4.8%;
    width: 881px;
    height: 350px;
  }

  @media screen and (max-width: 1880px) {
    top: 11%;
    left: 4%;
    width: 700px;
    height: 350px;
  }

  @media screen and (max-width: 1440px) {
    top: 12%;
    left: 4%;
    width: 580px;
    height: 300px;
    border: 1px solid red;
  }

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 884px) {
  }

  @media screen and (max-width: 834px) {
  }

  @media screen and (max-width: 820px) {
  }

  @media screen and (max-width: 800px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 428px) {
  }

  @media screen and (max-width: 414px) {
  }

  @media screen and (max-width: 412px) {
  }

  @media screen and (max-width: 393px) {
  }

  @media screen and (max-width: 390px) {
  }

  @media screen and (max-width: 375px) {
  }

  @media screen and (max-width: 360px) {
  }

  @media screen and (max-width: 320px) {
  }
  .IDContainer {
    display: flex;
    align-items: center;
    flex-direction: row;

    .ID1 {
      font-family: "Almendra SC", serif;
      font-weight: 400;
      font-size: 4em;
      color: var(--color-escura);
    }

    .ID2 {
      font-weight: 400;
      font-size: 3em;
      font-family: "Alice", serif;
      color: var(--color-escura);
    }

    .ID3 {
      font-weight: 400;
      font-size: 4em;
      font-family: "Alice", serif;
      color: var(--color-orange);
    }

    .ID4 {
      width: 160px;
      margin-left: 3%;
      font-weight: 400;
      font-size: 3em;
      font-family: "Alice", serif;
      color: var(--color-escura);
    }
  }

  h1 {
    font-weight: 400;
    font-size: 5em;
    font-family: "Allerta", sans-serif;
    color: var(--color-escura);
    margin-bottom: 1%;
  }

  .P1 {
    font-weight: 400;
    font-size: 2.5em;
    line-height: 30px;
    letter-spacing: 0.04em;
    font-family: "Alice", serif;
    color: var(--color-escura);
    white-space: nowrap;
  }

  .P2 {
    font-weight: 400;
    font-size: 2.5em;
    line-height: 30px;
    letter-spacing: 0.04em;
    font-family: "Alice", serif;
    color: var(--color-escura);
  }

  span {
    font-weight: 400;
    font-size: 35px;
    line-height: 44px;
    letter-spacing: 0.05em;
    font-family: "Allerta", sans-serif;
    color: var(--color-orange);
    margin-top: 1%;
  }
`;

export const IconsGHLD = styled.div`
  position: absolute;
  bottom: 18%;
  right: 20%;
  display: flex;
  flex-direction: column;

  a {
    background-color: transparent;

    box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 2px;

    margin-top: 9%;

    img {
      width: 200px;
      height: 60px;
    }
  }
`;
