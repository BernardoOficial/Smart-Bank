import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
      margin: 0;
      padding: 0;
      text-decoration: none;
      color: grey;
  }
`;

export const theme = {
  colors: {
    primary: "#41d3be",
    secondary: "#f1f1f1",
    gray: "#41d3be",
  },
  borderRadius: "6px",
};

export default GlobalStyle;