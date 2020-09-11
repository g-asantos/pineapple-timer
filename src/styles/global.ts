import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: #f0f5f5;
    -webkit-font-smoothing: antialiased;
  }

  body, button{
    font-family: 'Roboto', sans-serif;
  }

`;
