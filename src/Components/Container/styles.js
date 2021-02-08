import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Titulo = styled.h1`
  color: grey;
  padding: 25px 0;
`;

export {
    Wrapper,
    Conteudo,
    Titulo
}