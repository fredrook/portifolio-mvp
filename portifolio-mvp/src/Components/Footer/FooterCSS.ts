import styled from "styled-components";

export const TagFooter = styled.div`
  position: fixed;
  bottom: 1px;
  width: 100%;
  height: 45px;
  background-color: var(--color-primary);

  padding: 27px 0px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    background-color: transparent;
    border: none;

    .Img1 {
      width: 305px;
      height: 41px;

      @media screen and (max-width: 1280px) {
        width: 260px;
        height: 41px;
      }

      @media screen and (max-width: 884px) {
        width: 260px;
        height: 41px;
      }

      @media screen and (max-width: 834px) {
        width: 260px;
        height: 41px;
      }

      @media screen and (max-width: 820px) {
        width: 260px;
        height: 41px;
      }

      @media screen and (max-width: 425px) {
        width: 200px;
        position: relative;
        top: 0px;
        left: 10px;
      }

      @media screen and (max-width: 375px) {
        width: 180px;
        position: relative;
        top: 0px;
        left: 10px;
      }

      @media screen and (max-width: 320px) {
        width: 180px;
        position: relative;
        top: 0px;
        left: 10px;
      }
    }
  }

  p {
    position: relative;
    top: 10px;
    right: 45px;
    font-size: 8px;
    line-height: 10px;
    font-weight: 400;
    color: var(--color-white);

    @media screen and (max-width: 1280px) {
      position: relative;
      top: 0px;
      left: -1%;
      width: 95px;
    }

    @media screen and (max-width: 884px) {
      position: relative;
      top: 0px;
      left: -2%;
      width: 95px;
    }

    @media screen and (max-width: 834px) {
      position: relative;
      top: 0px;
      left: -1.5%;
      width: 95px;
    }

    @media screen and (max-width: 820px) {
      position: relative;
      top: 0px;
      left: -2%;
      width: 95px;
    }

    @media screen and (max-width: 800px) {
      position: relative;
      top: 0px;
      left: -1%;
      width: 95px;
    }

    @media screen and (max-width: 768px) {
      position: relative;
      top: 0px;
      left: 0px;
      width: 95px;
    }

    @media screen and (max-width: 425px) {
      position: relative;
      top: 0px;
      left: 0px;
      width: 95px;
    }

    @media screen and (max-width: 375px) {
      position: relative;
      top: 0px;
      left: 0px;
      width: 95px;
    }

    @media screen and (max-width: 320px) {
      position: relative;
      top: 0px;
      left: 0px;
      width: 95px;
    }
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: 428px) {
      display: none;
    }

    @media screen and (max-width: 425px) {
      display: none;
    }

    @media screen and (max-width: 414px) {
      display: none;
    }

    @media screen and (max-width: 375px) {
      display: none;
    }

    @media screen and (max-width: 320px) {
      display: none;
    }

    .whatsApp {
      display: flex;
      align-items: center;

      gap: 3px;

      font-size: 17px;
      font-weight: 400;
      color: var(--color-white);

      .icon1 {
        color: var(--color-orange);
      }
    }

    .email {
      display: flex;
      align-items: center;

      gap: 5px;

      font-size: 17px;
      font-weight: 400;
      color: var(--color-white);

      .icon2 {
        background: var(--color-orange);
      }
    }
  }
`;
