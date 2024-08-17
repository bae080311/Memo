import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
body {
    text-align: center;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
