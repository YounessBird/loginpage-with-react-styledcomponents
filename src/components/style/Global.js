import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
  padding: 0;
  outline: none;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
    background-color: ${({ theme }) => theme.colors.body};
}

`;
export default GlobalStyles;
