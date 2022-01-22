import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  font-family: Poppins;
  font-size: 18px;
  line-height: 27px;
  color: #151531;
  cursor: pointer;
  opacity: 0.7;
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
