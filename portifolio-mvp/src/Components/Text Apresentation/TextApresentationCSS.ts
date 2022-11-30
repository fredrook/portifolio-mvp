import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  aspect-ratio: auto 1 / 1;
`;

export const TextApresentationDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 720px;
  height: 335px;

  position: relative;
  top: 115px;
  left: 99px;

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
  position: relative;
  bottom: 36%;
  left: 180%;
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
