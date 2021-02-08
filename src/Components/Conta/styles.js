import styled from "styled-components";
import { Icone } from "../ComponentesGerais";

const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

const Detalhe = styled.span`
  color: ${({theme}) => theme.cores.primary};
  font-size: 24px;
`;

const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

export { Saldo, Detalhe, IconeMargin };
