import styled from "styled-components"

export const CarouselStyled = styled.div`
position: relative;
bottom: 8%;
right: 5px;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
margin-top: 5vw;

  .app__carousel--wrapper {
    max-width: 95vw;
    align-self: center;
    justify-self: center;
    background: none;
  }

  .app__carousel--img-box > div {
    background-size: cover;
    margin: 0 auto; 
    aspect-ratio: 425/202;
    width: 96%;
    
  }
`;