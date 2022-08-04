import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 93px;
  height: 32px;
  border: 2px solid #d1d1d1;
  border-radius: 42px;
  gap: 10px;

`;

export const ButtonIcone = styled.i`
  background-image: url("/o/ex-colaborador-detalhes-concluido/img/vector.svg");
  color: red;
  background-position: center;
  width: 8px;
  height: 10px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ButtonTitle = styled.span`
  width: 34px;
  height: 20px;
  font-family: "Rawline";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #979797;
`;
