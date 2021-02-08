import styled from 'styled-components';

const Header = styled.header`
  background-color: ${(props) => props.theme.cores.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid ${({theme}) => theme.cores.conteudo};

  background-color: ${(props) => props.primary ? props.theme.cores.conteudo : props.theme.cores.primary};
  color: ${(props) => props.primary ? props.theme.cores.primary : props.theme.cores.conteudo};
`;

export {
    Header,
    Logo,
    BtnHeader
}