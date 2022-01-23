import styled from "styled-components";

export const StyledLink = styled.a`
  text-decoration: none;
  font-family: Poppins;
  font-size: 18px;
  line-height: 27px;
  color: ${({ color }) => color || "#151531"};
  cursor: pointer;
  // opacity: 0.7;
  padding-right: 2rem;

  @media (max-width: 1200px) {
    padding-right: 1rem;
  }
`;

export const StyledBoldLink = styled.a`
  text-decoration: none;
  font-family: Poppins;
  font-size: 18px;
  line-height: 27px;
  color: ${({ color }) => color || "#151531"};
  cursor: pointer;
  // opacity: 0.7;
  padding-right: 2rem;
  font-weight: bold;

  @media (max-width: 1200px) {
    padding-right: 1rem;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #7408f8;
  border: none;
  border-radius: 65px;
  color: white;
  padding: 16px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

export const AddressButton = styled.button`
  background-color: #e5e5e5;
  border: none;
  border-radius: 65px;
  color: #000000;
  padding: 16px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

export const AvaxLogo = styled.img`
  margin-top: 4px;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const AvalancheButton = styled.button`
  background-color: transparent;
  border: 2px solid #ea4142;
  border-radius: 65px;
  color: #ea4142;
  padding: 16px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

export const PriceTag = styled.p`
  color: #151531;
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
`;
