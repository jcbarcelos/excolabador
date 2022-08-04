import React from "react";

import {
  Container,
  CardFrame,
  ContainerCardCounteudo,
  ContainerCardTitle,
  CardTitle,
  CardLink,
  CardSubtitle,
  ContainerButton,
  CardButton,
  CardTitleData,
} from "./styled";
import moment from "moment";
function Card({ currentItems }) {
  const [colorStatus, setColorStatus] = React.useState(true);

  return (
    <React.StrictMode>
      {currentItems &&
        currentItems.map((item) => (
          <Container colorstatus={colorStatus} key={item}>
            <CardFrame colorstatus={colorStatus} />
            <ContainerCardCounteudo>
              <ContainerCardTitle>
                <CardTitle>Chave do FGTS {item}</CardTitle>
                <CardLink colorstatus={colorStatus}> Ver mais</CardLink>
              </ContainerCardTitle>

              <CardSubtitle>INC0075332</CardSubtitle>

              <ContainerButton>
                <CardButton colorstatus={colorStatus}>Aberto</CardButton>
                <CardTitleData>
                  Iniciado em: {moment("7/6/2022 14:00:00").format("L")}{" "}
                </CardTitleData>
              </ContainerButton>
            </ContainerCardCounteudo>
          </Container>
        ))}
    </React.StrictMode>
  );
}

export default Card;
