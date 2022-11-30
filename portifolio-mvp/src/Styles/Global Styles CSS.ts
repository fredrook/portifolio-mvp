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
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;

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

  #app__motion--page{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #app__motion--content {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  #app__motion--modal{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
