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
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
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
              <LogoStyles>
                <FaFacebookF size="34px" />
              </LogoStyles>
              <LogoStyles>
                <AiFillInstagram size="34px" />
              </LogoStyles>
              <LogoStyles>
                <ImLinkedin size="34px" />
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
                >
                  Coingecko
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a
                  href="https://coinmarketcap.com/currencies/joe/"
                  target="_blank"
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
                >
                  Binance.com
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a href="https://ftx.com/trade/JOE/USD" target="_blank">
                  FTX.com
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a href="https://crypto.com/price/joe" target="_blank">
                  Crypto.com
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a href="https://www.gate.io/trade/JOE_USDT" target="_blank">
                  Gate.io
                </a>
              </FooterSubTitle>
              <FooterSubTitle>
                <a
                  href="https://www.mexc.com/exchange/JOE_USDT"
                  target="_blank"
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
              >
                TokenTerminal
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://defillama.com/protocol/trader-joe"
                target="_blank"
              >
                Defi Llama
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://www.coingecko.com/en/exchanges/traderjoe"
                target="_blank"
              >
                Coingecko
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://coinmarketcap.com/exchanges/traderjoe/"
                target="_blank"
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
              >
                HashEx
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://defillama.com/protocol/trader-joe"
                target="_blank"
              >
                Paladin
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a href="" target="_blank">
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
              >
                Apply for Farm
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a
                href="https://github.com/traderjoe-xyz/joe-tokenlists"
                target="_blank"
              >
                Token Listing
              </a>
            </FooterSubTitle>
            <FooterSubTitle>
              <a href="https://twitter.com/traderjoe_xyz" target="_blank">
                Contact Us
              </a>
            </FooterSubTitle>
          </FooterDiv>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
}
