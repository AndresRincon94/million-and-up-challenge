import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0 2vw;
  }
`;
 
export default GlobalStyle;
