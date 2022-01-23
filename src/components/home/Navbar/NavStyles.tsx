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
`;

export const IconWrapper = styled.span`
  margin-right: 53px;
`;

export const ButtonWrapper = styled.span`
  margin-left: 22px;
  margin-right: 60px;
`;

// export const NavTag = styled.a`
//   padding-left: 1rem;
//   padding-right: 1rem;
//   color: ${({ color }) => color || "#151531"};
// `;
