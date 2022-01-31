import React from "react";
import {
  LogoStyles,
  FooterContainer,
  FooterLogo,
  FooterText,
  FooterWrapper,
  LogoDiv,
  MediaLogosContainer,
  FooterDiv,
  FooterTitle,
  FooterSubTitle,
  FooterExTitle,
  FooterDoubleDiv,
} from "./footer-styles";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <LogoDiv>
            <FooterLogo src="/trader-joe-logo.png" />
            <FooterText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mi
              dui morbi adipiscing. Tempus.
            </FooterText>
            <MediaLogosContainer>
              <LogoStyles
                href="https://twitter.com/traderjoe_xyz"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size="34px" />
              </LogoStyles>
              <LogoStyles
                href="https://discord.com/invite/GHZceZhbZU"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord size="34px" />
              </LogoStyles>
              <LogoStyles
                href="https://github.com/traderjoe-xyz/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size="34px" />
              </LogoStyles>
            </MediaLogosContainer>
          </LogoDiv>

          <FooterDoubleDiv>
            <FooterDiv>
              <FooterTitle>JOE Token</FooterTitle>
              <FooterSubTitle>
                <a
                  href="https://www.coingecko.com/en/coins/joe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Coingecko
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a
                  href="https://coinmarketcap.com/currencies/joe/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CoinMarketCap
                </a>
              </FooterSubTitle>
            </FooterDiv>

            {/*Division*/}

            <FooterDiv>
              <FooterExTitle>Exchanges</FooterExTitle>
              <FooterSubTitle>
                <a
                  href="https://www.binance.com/en/trade/JOE_USDT?layout=pro"
                  target="_blank"
                  rel="noreferrer"
                >
                  Binance.com
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a
                  href="https://ftx.com/trade/JOE/USD"
                  target="_blank"
                  rel="noreferrer"
                >
                  FTX.com
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a
                  href="https://crypto.com/price/joe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Crypto.com
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a
                  href="https://www.gate.io/trade/JOE_USDT"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gate.io
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a
                  href="https://www.mexc.com/exchange/JOE_USDT"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mexc.com
                </a>
              </FooterSubTitle>
            </FooterDiv>
          </FooterDoubleDiv>

          {/*Division*/}

          <FooterDiv>
            <FooterTitle>JOE Dex</FooterTitle>
            <FooterSubTitle>
              <a
                href="https://www.tokenterminal.com/terminal/projects/trader-joe"
                target="_blank"
                rel="noreferrer"
              >
                TokenTerminal
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://defillama.com/protocol/trader-joe"
                target="_blank"
                rel="noreferrer"
              >
                Defi Llama
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://www.coingecko.com/en/exchanges/traderjoe"
                target="_blank"
                rel="noreferrer"
              >
                Coingecko
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://coinmarketcap.com/exchanges/traderjoe/"
                target="_blank"
                rel="noreferrer"
              >
                CoinMarketCap
              </a>
            </FooterSubTitle>
          </FooterDiv>

          {/*Division*/}

          <FooterDiv>
            <FooterTitle>Auditors</FooterTitle>
            <FooterSubTitle>
              <a
                href="https://docs.traderjoexyz.com/main/audits/dex"
                target="_blank"
                rel="noreferrer"
              >
                HashEx
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://defillama.com/protocol/trader-joe"
                target="_blank"
                rel="noreferrer"
              >
                Paladin
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a href="" target="_blank" rel="noreferrer">
                Subscribe
              </a>
            </FooterSubTitle>
          </FooterDiv>

          {/*Division*/}

          <FooterDiv>
            <FooterTitle>Business</FooterTitle>
            <FooterSubTitle>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf0P1StZNsyHZEf9KSMdlc3RL3aEW_K-zPTZX2pbCcBnf7N-w/viewform?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Apply for Farm
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://github.com/traderjoe-xyz/joe-tokenlists"
                target="_blank"
                rel="noreferrer"
              >
                Token Listing
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://twitter.com/traderjoe_xyz"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </FooterSubTitle>
          </FooterDiv>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
}
