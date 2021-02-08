import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { Header, Logo, BtnHeader } from "./styles";

const Cabecalho = () => {
  return (
    <Header>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">Sair</BtnHeader>
      </div>
    </Header>
  );
};

export default Cabecalho;
