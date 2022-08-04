import React from "react";
import { Container, Conteudo } from "./ContentCardStyled.js";
import Button from "../Button/Button.js";
import Card from "../Card/Card.js";
import Title from "../Title/Title.js";

function ContentCard() {
  return (
    <Container>
      <Conteudo>
        <Button />
        <Title />
        <Card />
      </Conteudo>
    </Container>
  );
}

export default ContentCard;
