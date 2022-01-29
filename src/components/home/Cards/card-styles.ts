import styled from "styled-components";

export const CardsContainer = styled.div`
  padding-top: 54px;
  background-color: ${({ color, theme }) => color || theme.colors.bg};
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
  border: 1px solid #dadada;
  border-radius: 10px;
  align-items: center;
  background-color: white;
  display: grid;
  padding: 18px 23px;
  grid-template-columns: 0.3fr 1fr;
  max-width: 284px;
`;

export const CardTitle = styled.p`
  font-size: 18px;
  font-family: Poppins, sans-serif;
  color: #151531;
`;

export const PriceTag = styled.p`
  color: #151531;
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  grid-column: 2/3;
`;

export const CardImgWrapper = styled.div`
  height: 40px;
  width: 40px;
  background-color: #ffdbdb;
  border-radius: 50%;
  margin-right: 16px;
`;
