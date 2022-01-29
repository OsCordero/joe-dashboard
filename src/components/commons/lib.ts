import styled from "styled-components";

export const StyledLink = styled.a`
  text-decoration: none;
  font-family: Poppins;
  font-size: 18px;
  line-height: 27px;
  color: ${({ color, theme }) => color || theme.colors.text};
  cursor: pointer;
  padding-right: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #919191;
  }

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
  height: 60px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1100px) {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 14px;
  }
`;

export const AddressButton = styled.button`
  background-color: #e5e5e5;
  border-radius: 65px;
  padding: 16px 25px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: 60px;
  max-width: 228px;

  .inner {
    display: flex;
    align-items: center;
  }
  .address {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 208px;
  }

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1100px) {
    padding-left: 5px;
    padding-right: 5px;
    max-width: 98px;
  }
  @media (max-width: 968px) {
    font-size: 14px;
  }
`;

export const AvaxLogo = styled.img`
  // margin-top: 4px;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  margin-right: 10px;
  float: left;
`;

export const AvalancheButton = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.avalancheRed};
  border-radius: 65px;
  color: ${({ theme }) => theme.colors.avalancheRed};
  padding: 16px 25px;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1100px) {
    padding-left: 5px;
    padding-right: 5px;
    max-width: 98px;
  }

  @media (max-width: 968px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    max-width: 1200px;
  }
  @media (max-width: 968px) {
    max-width: 600px;
  }
`;
