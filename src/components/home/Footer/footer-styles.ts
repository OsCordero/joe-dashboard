import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #c9c7c7;
  background-color: ${({ color, theme }) => color || theme.colors.bg};
`;

export const FooterContainer = styled.div`
  padding-left: 171.5px;
  padding-right: 171.5px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  grid-gap: 25px;

  @media (max-width: 1200px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 950px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const LogoDiv = styled.div``;

export const FooterLogo = styled.img`
  height: 74px;
  width: 74px;
  padding-top: 32px;
  padding-bottom: 29px;
`;

export const FooterText = styled.h3`
  font-weight: 400;
  font-family: Poppins;
  font-size: 16px;
  width: 80%;
  line-height: 30px;
`;

export const MediaLogosContainer = styled.div`
  margin-top: 74px;
  display: inline-block;
`;

export const LogoStyles = styled.p`
  color: #ea4142;
  display: inline-block;
  margin-right: 28px;

  @media (max-width: 950px) {
    margin-right: 10px;
  }
`;

export const FooterDiv = styled.div``;

export const FooterDoubleDiv = styled.div``;

export const FooterTitle = styled.p`
  font-family: Poppins;
  font-weight: bold;
  font-size: 18px;
  padding-top: 46px;
  line-height: 186.2%;
  padding-bottom: 13px;
  color: #313131;
`;

export const FooterSubTitle = styled.p`
  a {
    font-family: Poppins;
    font-size: 16px;
    line-height: 214.2%;
    padding-bottom: 8px;
    text-decoration: none;
    color: #313131;
  }
`;

export const FooterExTitle = styled.p`
  font-family: Poppins;
  font-weight: bold;
  font-size: 18px;
  padding-top: 28px;
  line-height: 186.2%;
  padding-bottom: 13px;
  color: #313131;
`;
