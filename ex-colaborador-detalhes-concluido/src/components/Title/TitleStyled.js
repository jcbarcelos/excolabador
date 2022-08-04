import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  flex-direction: column;
  font-family: "Rawline";
  margin-bottom: 84px;

`;
export const TitleCard = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #3d4b14;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.span`
  margin: 8px 0px 0 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #2f2f2f;

  display: flex;
  justify-content: center;
  width: 334px;

  height: 44px;

  @media screen and (min-width: 760px) {
    /* text-align: center; */
    width: 100%;
    height: 22px;
  }
`;
