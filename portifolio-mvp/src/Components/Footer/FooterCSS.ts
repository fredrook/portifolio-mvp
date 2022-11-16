import styled from "styled-components";

export const TagFooter = styled.header`
  position: fixed;
  bottom: 1px;
  width: 100%;
  height: 45px;
  background-color: var(--color-primary);
  
  padding: 27px 0px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    background-color: transparent;
    border: none;

    img {
      width: 305px;
      height: 41px;
    }
  }

  p {
    font-size: 8px;
    line-height: 10px;
    font-weight: 400;
    color: var(--color-white);
  }

  div {    
    .whatsApp {
      color: var(--color-white);
    }

    .email {
      color: var(--color-white);
    }
  }
`;
