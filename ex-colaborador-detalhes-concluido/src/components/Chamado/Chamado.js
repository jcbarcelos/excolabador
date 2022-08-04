import React from "react";
import HistoricoConversa from "../HistoricoConversa/HistoricoConversa.js";

import {
  Button,
  ButtonTitle,
  Container,
  LinhaDivisoria,
  TitleData,
  TitleOne,
  TitleSub,
} from "./ChamadoStyled.js";

function Chamado() {
  return (
    <Container>
      <TitleOne>Homologação</TitleOne>
      <TitleSub>INC0004291</TitleSub>
      <Button>
        <ButtonTitle>Concluído</ButtonTitle>
      </Button>
      <TitleData>Encerrado em: 2/5/2022</TitleData>
      <LinhaDivisoria />
      <HistoricoConversa />
    </Container>
  );
}

export default Chamado;
