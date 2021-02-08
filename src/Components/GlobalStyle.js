import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
      margin: 0;
      padding: 0;
      text-decoration: none;
  }
`;

export const themeClaro = {
  cores: {
    primary: "#41d3be",
    fundo: "#f1f1f1",
    conteudo: "white",
    text: "#41d3be",
    filter: ''
  },
  borderRadius: "6px",
};

export const themeEscuro = {
  cores: {
    primary: "#41d3be",
    fundo: "#363537",
    conteudo: "#5c5b5e",
    text: "#fafafa",
    filter: 'invert(100%)'
  },
  borderRadius: "6px",
};

export default GlobalStyle;