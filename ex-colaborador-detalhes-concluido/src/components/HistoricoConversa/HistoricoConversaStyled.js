import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Rawline";
`;
export const ContainerKlabin = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerExColaborador = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.span`
  width: 203px;
  height: 26px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #2f2f2f;
`;
export const BalaoConversaKlabin = styled.div`
  box-sizing: border-box;
  width: 219px;
  height: 86px;
  border: 1px solid #d1e07c;
  border-radius: 15px;
  background: linear-gradient(
      0deg,
      rgba(209, 224, 124, 0.5),
      rgba(209, 224, 124, 0.5)
    ),
    #ffffff;
  &::before {
    position: absolute;
    width: 20px;
    height: 14.29px;
    left: 104px;

    background: #d1e07c;
    transform: rotate(-90deg);
  }
`;
export const BalaoConversaExColaborador = styled.div`
  width: 231px;
  height: 178px;
  background: linear-gradient(
      0deg,
      rgba(28, 147, 68, 0.25),
      rgba(28, 147, 68, 0.25)
    ),
    #ffffff;
`;

export const Icone = styled.img`
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border: 36px solid transparent;
  background-image: url("/o/ex-colaborador-detalhes-concluido/img/Ellipse9.svg");
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
`;

export const DataBalao = styled.span`
  width: 91px;
  height: 16px;
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #979797;
`;

export const ButtonInicio = styled.div`
  width: 60px;
  height: 60px;
  background: #1c9344;
`;
export const ButtonInicioTitle = styled.span`
  width: 60px;
  height: 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const Anexo = styled.div`
  width: 182px;
  height: 30px;
  background: #ffffff;
  border-radius: 8px;
`;
export const AnexoIcone = styled.img`
  background: #1c9344;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export const AnexoTitle = styled.img`
  width: 131px;
  height: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #2f2f2f;
`;
