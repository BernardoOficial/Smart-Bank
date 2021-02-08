import React from "react";
import { Box, Botao } from "../ComponentesGerais";
import { extratoLista } from "../../info";
import { Items, Item } from "./Items/styles";
import imageFilter from '../imageFilter';

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id}>
              <figure>{imageFilter(type)}</figure>
              <Item>
                  <span>{type}</span>
                  <span>{from}</span>
                  <span>{value}</span>
              </Item>
              <span>{date}</span>
          </Items>
        );
      })}

      <Botao>Enviar</Botao>
    </Box>
  );
};

export default Extrato;
