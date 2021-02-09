import React, { useState } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";

import { ThemeProvider } from "styled-components";
import GlobalStyle, { themeClaro, themeEscuro } from "./Components/GlobalStyle";
import { Icone, BtnTheme } from "./Components/ComponentesGerais";
import ThemeOn from './assets/images/themeOn.svg';
import ThemeOff from './assets/images/themeOff.svg';

function App() {

  const [theme, setTheme] = useState(false);

  const handleClick = () => setTheme((theme) => !theme);

  return (
    <>
      <ThemeProvider theme={theme ? themeEscuro : themeClaro}>
        <GlobalStyle />
        <Header />
        <Container />
        <BtnTheme onClick={handleClick}>
          <Icone src={theme ? ThemeOff : ThemeOn} alt="Tema On / Tema Off" />
        </BtnTheme>
      </ThemeProvider>
    </>
  );
}

export default App;
