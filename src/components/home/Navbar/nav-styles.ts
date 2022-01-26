import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: #f2f9ff;
  width: 100%;
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    .right-buttons {
      display: flex;
      align-items: center;
    }
  }
`;

export const NavLogo = styled.img`
  height: 100px;
  width: 100px;
  cursor: pointer;

  @media (max-width: 1100px) {
    padding-left: 10px;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 53px;

  @media (max-width: 1100px) {
    margin-right: 10px;
  }
`;

export const ButtonWrapper = styled.span`
  padding-left: 22px;

  @media (max-width: 1100px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
