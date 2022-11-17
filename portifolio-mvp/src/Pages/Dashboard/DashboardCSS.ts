import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  .ICB{
    width: 100%;
    height: 80%;
    position: fixed;
    top: 20%;
    align-items: center;

    z-index: -9999;
  }

  @media screen and (min-height: 800px) {
    height: 800px;
  }
`;

