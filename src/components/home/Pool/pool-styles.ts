import styled from "styled-components";

export const PoolWrapper = styled.section`
  width: 100%;
  background-color: ${({ color, theme }) => color || theme.colors.bg};
  padding-bottom: 95px;
`;

export const ArrowDiv = styled.div`
  margin-top: 46px;
  background-color: #ffdbdb;
  border-radius: 50%;
  align-items: center;
  height: 54px;
  width: 54px;
`;

export const LeftArrow = styled.a`
  color: #44445a;
  position: absolute;
  margin: 16px;
`;

export const PoolTitle = styled.p`
  padding-top: 23px;
  padding-bottom: 32px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  font-size: 30px;
  color: #151531;
`;

export const DivsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;

  @media (max-width: 970px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const TopDiv = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #dadada;
  margin-bottom: 30px;
  padding: 40px 0px 38px 0px;

  .left-padding {
    padding-left: 40px;
  }
  @media (max-width: 970px) {
    width: 100%;
  }
`;

export const TopSpan = styled.span`
  display: inline-block;
`;

export const TopSubTitle = styled.p`
  padding-top: 30px;
  padding-bottom: 50px;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  opacity: 0.6;
  color: #313131;
`;

export const MimLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: -10px;
  margin-left: 15px;
  margin-right: 15px;
  display: inline-block;
`;

export const TopTitle = styled.h2`
  font-size: 25px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  display: inline-block;
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-gap: 25px;
  padding-right: 10%;
`;
export const Info = styled.div`
  width: 100%;
  //text-align: center;
`;
export const InfoTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  color: #44445a;
  opacity: 0.6;
`;

export const InfoAmount = styled.p`
  padding-top: 20px;
  font-size: 25px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
`;

export const BottomDiv = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #dadada;
  padding: 40px 0px 38px 0px;

  hr {
    width: 100%;
    color: #dadada;
  }

  @media (max-width: 970px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const LeftBottomText = styled.div`
  padding-left: 10%;
  padding-top: 35px;
  padding-bottom: 35px;
  display: inline-block;
`;

export const RightBottomText = styled.div`
  float: right;
  padding-right: 10%;
  padding-top: 35px;
  padding-bottom: 35px;
  text-align: right;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  color: #dadada;
  border-bottom: 1px solid #c9c7c7;
`;
export const RightDiv = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #dadada;
  padding: 40px 0px 38px 0px;

  .sides {
    padding-left: 33px;
    padding-right: 33px;

    .plus {
      /* margin-left: auto;
      margin-right: auto; */
      margin-top: 27.5px;
      margin-bottom: 27.5px;
      text-align: center;
    }

    .right-top {
      padding-bottom: 55px;
    }
  }
`;

export const RightTitle = styled.h2`
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  padding-right: 6%;
  display: inline-block;
`;

export const RightSubTitle = styled.h2`
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  padding-left: 6%;
  opacity: 0.6;
  display: inline-block;
`;

export const VerticalLine = styled.div`
  top: 4px;
  height: 10px;
  border-left: 2px solid #000000;
  display: inline-block;
`;

export const VerticalInputLine = styled.div`
  top: 4px;
  height: 10px;
  border-left: 2px solid #8f8f9c;
  display: inline-block;
  margin-left: -2px;
`;

export const SettingsImg = styled.img`
  /* margin-left: 50%; */
  //display: inline-block;
  margin-bottom: -7.5px;
  height: 25px;
  width: 25px;
  float: right;

  /* @media (max-width: 970px) {
    margin-left: 0;
    float: right;
  } */
`;

export const InputTitle = styled.h2`
  font-size: 16px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  opacity: 0.6;
  display: inline-block;

  /* @media (max-width: 970px) {
    padding-right: 0;
  } */
`;

export const InputBalance = styled.h2`
  font-size: 16px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  /* display: inline-block; */
  float: right;

  /* @media (max-width: 970px) {
    float: right;
  } */
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 22px;
  .input {
    width: 50%;
    /* padding: 15px 24px; */
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 6%;
    padding-right: 6%;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    border: 1px solid #dadada;
    border-right-style: none;
    border-bottom-left-radius: 60px;
    border-top-left-radius: 60px;
    display: inline-block;
    vertical-align: middle;
  }

  .input-right {
    width: 27.5%;
    /* padding: 16.25px 18px 16.25px 20px; */
    padding-top: 17px;
    padding-bottom: 17px;
    /* padding-right: 4.5%; */
    padding-left: 5%;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    border: 1px solid #dadada;
    border-left-style: none;
    display: inline-block;
    vertical-align: middle;
    border-bottom-right-radius: 60px;
    border-top-right-radius: 60px;
    align-items: center;

    .arrow {
      vertical-align: middle;
      color: #8f8f9c;
      margin-left: 10%;
    }
  }

  @media (max-width: 1300px) {
    .arrow {
      margin-right: 2px;
    }
  }

  @media (max-width: 1200px) {
    .input {
      width: 45%;
    }
    .input-right {
      width: 32%;
      padding-left: 5px;
      padding-right: 5px;
    }
    .arrow {
      margin-left: 5%;
    }
  }

  @media (max-width: 1020px) {
    .input {
      width: 45%;
    }
    .input-right {
      width: 35%;
    }
  }

  @media (max-width: 970px) {
    .input {
      width: 50%;
    }

    .input-right {
      width: 27%;
      padding-left: 5%;
      padding-right: 5%;
    }
    .arrow {
      margin-left: 10%;
    }
  }
`;

export const InputImg = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10%;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 1200px) {
    margin-right: 5%;
  }

  @media (max-width: 970px) {
    margin-right: 10%;
  }
`;

export const InputText = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  display: inline-block;
  align-items: center;
`;

export const PoolButton = styled.button`
  margin-top: 150px;
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
  width: 100%;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1100px) {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 14px;
  }
`;
