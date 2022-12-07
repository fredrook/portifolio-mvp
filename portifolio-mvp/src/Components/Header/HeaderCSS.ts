import styled from "styled-components";

export const TagHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9999;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 98px;

  padding: 0px 5%;

  background-color: var(--color-primary);

  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 2px;
  border-bottom: 5px solid var(black);

  @media screen and (max-width: 375px) {
        
      }

  @media screen and (min-width: 360px) {
      height: 67px;
    }

  @media screen and (min-width: 320px) {
      height: 65px;
    }

  img {
    width: 103px;
    height: 84px;
    color: white;
    margin-right: 3%;

    @media screen and (min-width: 1024px) {
      margin-right: 1%;
    }

    @media screen and (min-width: 768px) {
      margin-right: 1%;
      margin-left: -1.5%;
    }

    @media screen and (max-width: 390px) {
      
    }

    @media screen and (min-width: 375px) {
      margin-right: 6%;
      width: 63px;
      height: 62px;
      }

    @media screen and (min-width: 360px) {
      margin-right: 6%;
      width: 63px;
      height: 60px;
    }

    @media screen and (min-width: 320px) {
      margin-right: 6%;
      width: 70px;
      height: 63px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2%;

    .navIcon {
      font-size: 35px;
      color: white;
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-left: 2%;

  @media screen and (min-width: 1440px) {
    width: 100%;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
    gap: 2%;
  }

  @media screen and (max-width: 1280px) {
    width: 72%;
    gap: 1.5%;
  }

  @media screen and (max-width: 884px) {
    width: 72%;
    gap: 1.5%;
  }

  @media screen and (max-width: 834px) {
    width: 72%;
    gap: 1%;
  }

  @media screen and (max-width: 820px) {
    width: 72%;
    gap: 1.5%;
  }

  @media screen and (max-width: 800px) {
    width: 72%;
    gap: 1.5%;
  }

  @media screen and (max-width: 768px) {
    width: 72%;
    gap: 2%;
  }

  @media screen and (max-width: 428px) {
    display: none;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const DivList = styled.div`
  display: none;

  @media screen and (max-width: 428px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100px;
    height: 50px;

    .ListIcon {
      width: 65px;
      height: 25px;
      border-radius: 50%;
      border: none;
      color: var(--color-orange);
      background: var(--color-white);
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100px;
    height: 50px;

    .ListIcon {
      width: 65px;
      height: 25px;
      border-radius: 50%;
      border: none;
      color: var(--color-orange);
      background: var(--color-white);
    }
  }
`;
