import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 150px;
  background-color: #f2f9ff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.img`
  height: 100px;
  width: 100px;
  padding-left: 75px;
  padding-top: 14px;
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
  padding-right: 60px;

  @media (max-width: 1100px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

// export const NavTag = styled.a`
//   padding-left: 1rem;
//   padding-right: 1rem;
//   color: ${({ color }) => color || "#151531"};
// `;
