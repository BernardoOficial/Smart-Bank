import styled from 'styled-components';

const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.cores.conteudo};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

const Botao = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

const Icone = styled.img`
  height: 25px;
  width: 25px;
  filter: ${({theme}) => theme.cores.filter};
`;

const BtnTheme = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export {
    Box,
    Botao,
    Icone,
    BtnTheme
}