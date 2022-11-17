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

    img {
      width: 305px;
      height: 41px;
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
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    
    .whatsApp {
      display: flex;
      align-items: center;

      gap: 5px;
      
      font-size: 17px;
      font-weight: 400;
      color: var(--color-white);

      .icon1{
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

      .icon2{
        background: var(--color-orange);
      }
    }
  }
`;
