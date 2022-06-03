import { createGlobalStyle } from "styled-components";
import { primaryFontFamily } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Barlow");
@import url("https://fonts.googleapis.com/css?family=Poppins");

${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 65px 0 0;
  font-family: ${primaryFontFamily}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}
`;
