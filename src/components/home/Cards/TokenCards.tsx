import React, { useEffect, useState } from "react";
import { formatMoney } from "../../../utils/formats";
import { Container } from "../../commons/lib";
import {
  Card,
  CardsContainer,
  CardsWrapper,
  CardTitle,
  PriceTag,
  Title,
  CardImgWrapper,
} from "./card-styles";

export default function TokenCards() {
  const [tokens, setTokens] =
    useState<{ contract_address: string; quote: number; balance: string }[]>();

  useEffect(() => {
    fetch(
      `https://api.covalenthq.com/v1/43114/address/0xf7435997f01c223e86f70a5484add697c03fd508/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setTokens(data.data.items))
      .catch((err) => console.log(err));
  }, []);

  const total = tokens?.reduce((acc, curr) => acc + curr.quote, 0);
  const avaxInfo = tokens?.find(
    (token) =>
      token.contract_address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  );
  const avaxBalance = avaxInfo?.quote;
  const avaxNativeBalance = +(avaxInfo?.balance ?? 0) / Math.pow(10, 18);
  return (
    <>
      <CardsContainer>
        <Container>
          <Title>All Assets</Title>
          <CardsWrapper>
            <Card>
              <CardImgWrapper />
              <CardTitle>Portfolio total value</CardTitle>
              <PriceTag>{formatMoney(total ?? 0, 2)}</PriceTag>
            </Card>
            <Card>
              <CardImgWrapper />
              <CardTitle>AVAX balance</CardTitle>
              <PriceTag>{formatMoney(avaxBalance ?? 0, 2)}</PriceTag>
            </Card>
            <Card>
              <CardImgWrapper />
              <CardTitle>AVAX native Balance</CardTitle>
              <PriceTag>{avaxNativeBalance.toFixed(5)} AVAX</PriceTag>
            </Card>
          </CardsWrapper>
        </Container>
      </CardsContainer>
    </>
  );
}
