import styled from "styled-components";

export const CardsContainer = styled.div`
  padding-top: 54px;
  padding-left: 67.5px;
  padding-right: 67.5px;
  background-color: #f2f9ff;
`;

export const Title = styled.p`
  font-size: 22px;
  font-family: Poppins;
  font-weight: 500;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(284px, 1fr));
  gap: 20px;
  padding-top: 22px;
  padding-bottom: 36px;
`;

export const Card = styled.div`
  height: 125px;
  width: 284px;
  border: 1px solid #dadada;
  border-radius: 10px;
  align-items: center;
  background-color: white;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-family: Poppins;
  margin-top: 24px;
  //   margin-right: 33px;
  //   float: right;
`;

export const PriceTag = styled.p`
  color: #151531;
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  padding: 15px 119px 23px 78px;
`;

export const CardImgWrapper = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ffdbdb;
  border-radius: 50%;
  margin-top: 18px;
  margin-left: 22px;
  margin-right: 16px;
  float: left;
  vertical-align: middle;
`;
