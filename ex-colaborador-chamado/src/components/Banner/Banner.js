import React from "react";
import Paginate from "../Paginate/Paginate.js";

function Banner() {
  const dados = [];
  for (let index = 0; index < 50; index++) {
    dados.push(index);
  }
  console.log(dados);

  return (
    <div className="container_banner">
      <div className="container__chamados">
        <span className="container__title">Chamados</span>
        <span className="container__title_subtitle">
          Tire suas dúvidas sobre temas importantes para ex-colaboradores
          Klabin.
        </span>

        <Paginate dados={dados} />
      </div>
    </div>
  );
}

export default Banner;
