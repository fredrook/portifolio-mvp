import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary:          #1E4367;
    --color-primary-Focus:    #003A79;
    --color-primary-Negative: #000044;
    --color-orange:           #FF6B00;
    --color-grey-4:           #121214;
    --color-grey-3:           #212529;
    --color-grey-2:           ##d9d9d940;
    --color-grey-1:           #D9D9D9;
    --color-white:            #FFFFFF;
    --color-negative:         #E83F5B;
    --color-success:          #3FE864;
    
    font-family: alice;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-backgroundUncolor);
    color: var(--color-grey-100);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size:  1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: black;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;