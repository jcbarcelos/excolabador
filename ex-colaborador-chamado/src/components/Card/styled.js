import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 135px;
  background: #ffffff;
  border: 1px solid ${({ colorstatus }) => (colorstatus ? "#d1e07c" : "#979797")};
  border-radius: 15px;
  display: flex;
  margin: 16px 20px;
`;
export const CardFrame = styled.div`
  width: 7px;
  height: 130px;
  border-radius: 15px 0px 0px 15px;
  background: ${({ colorstatus }) => (colorstatus ? "#d1e07c" : "#979797")};
  margin: 1px 0 0 -1px;
`;
export const ContainerCardCounteudo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 0 20px;
`;
export const ContainerCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardTitle = styled.span`
  width: auto;
  height: 20px;
  min-height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #2f2f2f;
 
`;
export const CardLink = styled.a`
  width: 57px;
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  text-decoration-line: underline !important;
  border-bottom: 1px solid ${({ colorstatus }) => (colorstatus ? "#1c9344" : "#979797")};
  cursor: pointer;

  color: ${({ colorstatus }) => (colorstatus ? "#1c9344" : "#979797")} !important;
`;
export const CardSubtitle = styled.span`
  width: auto;
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #2f2f2f;
  text-align: left;
`;
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
export const CardButton = styled.button`
  width: 69px;
  height: 30px;
  background: ${({ colorstatus }) => (colorstatus ? "#d1e07c" : "#979797")};
  border-radius: 8px;
  border: 0;
  cursor: pointer;
`;
export const CardTitleData = styled.span`
  width: auto;
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #979797;
  margin-left: 15px;
`;
