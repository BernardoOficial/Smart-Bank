import React from "react";

import Conta from "../Conta";
import Extrato from "../Extrato";
import { Conteudo, Titulo, Wrapper } from "./styles";

const Container = () => {
  return (
    <Wrapper>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo >
        <Conta />
        <Extrato />
      </Conteudo>
    </Wrapper>
  );
};

export default Container;
