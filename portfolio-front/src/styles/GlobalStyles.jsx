import { createGlobalStyle } from "styled-components";
import theme from "../theme/theme.js";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.typography.primary};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body{
    width: 100%;
    background-color: ${theme.colors.dark};  
    color: ${theme.colors.white};
  }
  
  a{
    color: ${theme.colors.white};
    text-decoration: none;
  }

  button{
    background: none;
    border: none;
  }

  nav ul, li{
    list-style: none;
  }

  input{
    border: none;
    outline: none;
  }
`;
