import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary:          #1E4367;
    --color-primary-Focus:    #003A79;
    --color-primary-Negative: #000044;
    --color-orange:           #FF6B00;
    --color-escura:           #121214;
    --color-grey-3:           #212529;
    --color-grey-2:           ##d9d9d940;
    --color-grey-1:           #D9D9D9;
    --color-white:            #FFFFFF;
    --color-negative:         #E83F5B;
    --color-success:          #3FE864;
    
    font-family: 'Alice', serif;
    font-family: 'Allerta', sans-serif;
    font-family: 'Almendra SC', serif;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;      
    font-size: 0.5em;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;

  @media screen and (min-width: 2560px) {
   font-size: 1.5em;
  }

  @media screen and (max-width: 1920px) {
    font-size: 1em;
  }

  @media screen and (max-width: 1880px) {
    font-size: 1em;
  }

  @media screen and (max-width: 1680px) {
    font-size: 0.95em;
  }

  @media screen and (max-width: 1600px) {
    font-size: 0.97em;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.95em;
  }

  @media screen and (max-width: 1400px) {
    font-size: 0.85em;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.8em;
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.8em;
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
    font-size: 0.26em;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.26em;
  }

  @media screen and (max-width: 412px) {
  }

  @media screen and (max-width: 393px) {
  }

  @media screen and (max-width: 390px) {
    font-size: 0.26em;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.26em;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.22em;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.2em;
  }

    &::-webkit-scrollbar {
      width: 0.5rem;
      
    }
    &::-webkit-scrollbar-track {
      background: rgba(153, 168, 165, 0.3);
      border-radius: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background: var( --color-fontescura);
      border-radius: 0.3rem;
    }
  }

  img{
    @media screen and (min-width: 320px) and (max-width: 428px) {
    display: none;
  }
  }

  button {
    cursor: pointer;
    font-family: 'Alice', serif;
  }

  input:focus {
    border: 1px solid var(--color-success);
  }
`;

export default GlobalStyle;
