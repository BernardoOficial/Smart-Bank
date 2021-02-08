import React from "react";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./Components/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
