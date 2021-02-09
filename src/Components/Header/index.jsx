import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { Container, Logo, BtnHeader } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">Sair</BtnHeader>
      </div>
    </Container>
  );
};

export default Header;
