import React from "react";
import { Container } from "../../commons/lib";
import {
  ArrowDiv,
  BottomDiv,
  DivsContainer,
  HorizontalLine,
  Info,
  InfoAmount,
  InfoTitle,
  InfoWrapper,
  InputBalance,
  InputImg,
  InputText,
  InputTitle,
  InputWrapper,
  LeftArrow,
  LeftBottomText,
  LeftDiv,
  MimLogo,
  PoolButton,
  PoolTitle,
  PoolWrapper,
  RightBottomText,
  RightDiv,
  RightSubTitle,
  RightTitle,
  SettingsImg,
  TopDiv,
  TopSpan,
  TopSubTitle,
  TopTitle,
  VerticalInputLine,
} from "./pool-styles";
import { HiArrowLeft } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { VerticalLine } from "../Table/table-styles";
import { FaPlus } from "react-icons/fa";

export default function Pool() {
  return (
    <>
      <PoolWrapper>
        <Container>
          <ArrowDiv>
            <LeftArrow href="/">
              <HiArrowLeft size="22px" />
            </LeftArrow>
          </ArrowDiv>
          <PoolTitle>Manage Pool</PoolTitle>
          <DivsContainer>
            <LeftDiv>
              <TopDiv>
                <div className="left-padding">
                  <TopSpan>
                    <MimLogo src="/mim-logo.png" />{" "}
                    <TopTitle>MM-Time / {"  "}</TopTitle>
                    <MimLogo src="/mim-logo.png" /> <TopTitle> Time</TopTitle>
                  </TopSpan>
                  <TopSubTitle>
                    (0x0000000000000000000000000000000000000000)
                  </TopSubTitle>
                  <InfoWrapper>
                    <Info>
                      <InfoTitle>Liquidity</InfoTitle>
                      <InfoAmount>$1000</InfoAmount>
                    </Info>
                    <Info>
                      <InfoTitle>Volume(24H)</InfoTitle>
                      <InfoAmount>$1000</InfoAmount>
                    </Info>
                    <Info>
                      <InfoTitle>Fees(24H)</InfoTitle>
                      <InfoAmount>$1000</InfoAmount>
                    </Info>
                    <Info>
                      <InfoTitle>APR</InfoTitle>
                      <InfoAmount>$1000</InfoAmount>
                    </Info>
                  </InfoWrapper>
                </div>
              </TopDiv>
              <BottomDiv>
                <LeftBottomText>
                  <InfoTitle>Your Pool Share</InfoTitle>
                  <InfoAmount>0%</InfoAmount>
                </LeftBottomText>
                <RightBottomText>
                  <InfoTitle>Your Pool Tokens</InfoTitle>
                  <InfoAmount>0</InfoAmount>
                </RightBottomText>
                <HorizontalLine />
                <LeftBottomText>
                  <InfoTitle>Pooled MIM</InfoTitle>
                  <InfoAmount>0</InfoAmount>
                </LeftBottomText>
                <RightBottomText>
                  <InfoTitle>Pooled Time</InfoTitle>
                  <InfoAmount>0</InfoAmount>
                </RightBottomText>
              </BottomDiv>
            </LeftDiv>
            <RightDiv>
              <div className="sides">
                <div className="right-top">
                  <RightTitle>Add</RightTitle>
                  <VerticalLine />
                  <RightSubTitle>Remove</RightSubTitle>
                  <SettingsImg src="/settings-lines.png" />
                </div>
                <InputTitle>Input</InputTitle>
                <InputBalance>Balance : 0</InputBalance>
                <InputWrapper>
                  <input type="text" className="input" placeholder="0.0" />
                  <VerticalInputLine />
                  <div className="input-right">
                    <InputImg src="/mim-logo.png" />
                    <InputText>MM</InputText>
                    <IoIosArrowDown size="20px" className="arrow" />
                  </div>
                </InputWrapper>

                <div className="plus">
                  <FaPlus size="20px" />
                </div>

                <InputTitle>Input</InputTitle>
                <InputBalance>Balance : 0</InputBalance>
                <InputWrapper>
                  <input type="text" className="input" placeholder="0.0" />
                  <VerticalInputLine />
                  <div className="input-right">
                    <InputImg src="/mim-logo.png" />
                    <InputText>MM</InputText>
                    <IoIosArrowDown size="20px" className="arrow" />
                  </div>
                </InputWrapper>

                <div className="btn">
                  <PoolButton>Enter an Amount</PoolButton>
                </div>
              </div>
            </RightDiv>
          </DivsContainer>
        </Container>
      </PoolWrapper>
    </>
  );
}
