import React, { useEffect, useState } from "react";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { ThemeProvider } from "styled-components";
import GlobalStyle, { themeClaro, themeEscuro } from "./Components/GlobalStyle";
import { Icone, BtnTheme } from "./Components/ComponentesGerais";
import ThemeOn from './assets/images/themeOn.svg';

function App() {

  const [theme, setTheme] = useState(false);

  const handleClick = () => setTheme((theme) => !theme);

  return (
    <>
      <ThemeProvider theme={theme ? themeEscuro : themeClaro}>
        <GlobalStyle />
        <Cabecalho />
        <Container />
        <BtnTheme onClick={handleClick}>
          <Icone src={ThemeOn} alt="Tema On" />
        </BtnTheme>
      </ThemeProvider>
    </>
  );
}

export default App;
