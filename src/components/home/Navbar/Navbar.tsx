import React, { useState } from "react";
import Link from "next/link";
import {
  PrimaryButton,
  AddressButton,
  AvalancheButton,
  StyledLink,
  StyledBoldLink,
  AvaxLogo,
  Container,
} from "../../commons/lib";
import { ButtonWrapper, IconWrapper, NavLogo, StyledNav } from "./nav-styles";
import { FaSistrix } from "react-icons/fa";
import { useMoralis } from "react-moralis";
import styled from "styled-components";

const Rel = styled.div`
  position: relative;
  .address {
    position: absolute;
    bottom: -25px;
    left: -20px;
  }
`;
const Navbar = () => {
  const { authenticate, logout, isAuthenticated, account } = useMoralis();
  const [showInput, setShowInput] = useState(false);

  const handleLogin = () => {
    authenticate();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <StyledNav>
        <Container className="nav-container">
          <div>
            <Link href="/" passHref>
              <NavLogo src="/trader-joe-logo.png" />
            </Link>
          </div>
          <div>
            <Link href="#trade" passHref>
              <StyledBoldLink color="#F2716A">Trade</StyledBoldLink>
            </Link>
            <Link href="#pool" passHref>
              <StyledLink>Pool</StyledLink>
            </Link>
            <Link href="#farm" passHref>
              <StyledLink>Farm</StyledLink>
            </Link>
            <Link href="#lend" passHref>
              <StyledLink>Lend</StyledLink>
            </Link>
            <Link href="#stake" passHref>
              <StyledLink>Stake</StyledLink>
            </Link>
            <Link href="#zap" passHref>
              <StyledLink>Zap</StyledLink>
            </Link>
          </div>
          <div className="right-buttons">
            <Link href="" passHref>
              <IconWrapper>
                <FaSistrix size={22} />
              </IconWrapper>
            </Link>
            <Rel>
              <Link href="" passHref>
                <AvalancheButton onClick={() => setShowInput(!showInput)}>
                  Avalanche
                </AvalancheButton>
              </Link>
              {showInput && <input className="address" type="text" />}
            </Rel>
            <Link href="" passHref>
              <ButtonWrapper>
                {/* <PrimaryButton>Connect to a wallet</PrimaryButton> */}
                {isAuthenticated ? (
                  <AddressButton onClick={handleLogout}>
                    <span className="inner">
                      <AvaxLogo src="/avalanche-avax-logo.png" />
                      <span className="address">{account}</span>
                    </span>
                  </AddressButton>
                ) : (
                  <PrimaryButton onClick={handleLogin}>
                    Connect to a wallet
                  </PrimaryButton>
                )}
              </ButtonWrapper>
            </Link>
          </div>
        </Container>
      </StyledNav>
    </>
  );
};

export default Navbar;
