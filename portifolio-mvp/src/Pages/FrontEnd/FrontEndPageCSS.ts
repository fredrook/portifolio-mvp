import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;

  .DivIcons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 180px;

    img {
      width: 130px;
      height: 130px;
    }
  }

  .Batata {
    height: 30vmin;
    pointer-events: none;
    animation: ReactRotate infinite 20s linear;
  
  }
  
  @keyframes ReactRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } 
  
  span {
    margin-top: 83px;
    margin-left: 76px;
    font-weight: 400;
    font-size: 2em;
    line-height: 44px;
    text-decoration: underline;
    color: var(--color-orange);
  }

  .TextFrontEnd {
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
`;
