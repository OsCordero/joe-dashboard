import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { userStakingQuery } from "../../../apollo-client/queries";
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

export default function PoolCards() {
  const { user, account } = useMoralis();

  const { data, loading } = useQuery(userStakingQuery, {
    variables: {
      id:
        user && account
          ? account
          : "0-0x0022ec3dd352bf214a9d936081f10ffac66455e1",
    },
    context: { clientName: "masterchef" },
  });

  return (
    <>
      {data && (
        <CardsContainer>
          <Container>
            <Title>All Assets</Title>
            <CardsWrapper>
              <Card>
                <CardImgWrapper />
                <CardTitle>Staking liquidity</CardTitle>
                <PriceTag>{formatMoney(data.user?.entryUSD ?? 0, 2)}</PriceTag>
              </Card>
              <Card>
                <CardImgWrapper />
                <CardTitle>Total staked LP Tokens</CardTitle>
                <PriceTag>
                  {(data.user?.amount / Math.pow(10, 18)).toFixed(2)}
                </PriceTag>
              </Card>
            </CardsWrapper>
          </Container>
        </CardsContainer>
      )}
    </>
  );
}
