import React from "react";
import Link from "next/link";
import {
  PrimaryButton,
  AddressButton,
  AvalancheButton,
  StyledLink,
  StyledBoldLink,
  AvaxLogo,
} from "../../commons/lib";
import { ButtonWrapper, IconWrapper, NavLogo, StyledNav } from "./nav-styles";
import { FaSistrix } from "react-icons/fa";
import {
  useERC20Balances,
  useMoralis,
  useMoralisWeb3Api,
  useNativeBalance,
  useTokenPrice,
} from "react-moralis";

const Navbar = () => {
  const { authenticate, logout, isAuthenticated, account } = useMoralis();

  const handleLogin = () => {
    authenticate();
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <StyledNav>
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
        <div>
          <Link href="" passHref>
            <IconWrapper>
              <FaSistrix size={22} />
            </IconWrapper>
          </Link>
          <Link href="" passHref>
            <AvalancheButton>Avalanche</AvalancheButton>
          </Link>
          <Link href="" passHref>
            <ButtonWrapper>
              {/* <PrimaryButton>Connect to a wallet</PrimaryButton> */}
              {isAuthenticated ? (
                <AddressButton onClick={handleLogout}>
                  <AvaxLogo src="/avalanche-avax-logo.png" />
                  <span>{account}</span>
                </AddressButton>
              ) : (
                <PrimaryButton onClick={handleLogin}>
                  Connect to a wallet
                </PrimaryButton>
              )}
            </ButtonWrapper>
          </Link>
        </div>
      </StyledNav>
    </>
  );
};

export default Navbar;
