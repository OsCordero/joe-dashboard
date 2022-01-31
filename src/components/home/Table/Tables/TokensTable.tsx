import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import styled from "styled-components";
import { userTokensQuery } from "../../../../apollo-client/queries";
import { UserTokensResponse } from "../../../../types/tokensTypes";
import { formatMoney } from "../../../../utils/formats";
import {
  StyledTable,
  StyledTD,
  StyledTH,
  StyledTR,
  Token2Logo,
  VerticalTableLine,
} from "../table-styles";

const Token = styled(StyledTD)`
  justify-content: start;
  font-size: 16px;
  max-width: 100px;
  span {
    display: flex;
    justify-content: start;
    justify-items: start;
    align-items: center;
  }
`;

const TokensTable = () => {
  const { web3 } = useMoralis();
  const [tokens, setTokens] =
    useState<
      { contract_address: string; quote_rate: number; balance: string }[]
    >();
  useEffect(() => {
    fetch(
      `https://api.covalenthq.com/v1/43114/address/0x000000000a38444e0a6e37d3b630d7e855a7cb13/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setTokens(data.data.items))
      .catch((err) => console.log(err));
  }, []);

  const tokenWithBalances = tokens?.filter((token) => +token.balance > 0.1);

  const { data, loading } = useQuery<UserTokensResponse>(userTokensQuery, {
    variables: {
      tokens: tokenWithBalances?.map((token) => token.contract_address),
      first: 20,
    },
    skip: !tokens,
    fetchPolicy: "cache-and-network",
  });

  const tokenRows = data?.tokens
    .slice()
    .sort((a, b) => b.liquidity - a.liquidity)
    .filter(
      (token) => token.liquidity > 0.000001 && !token.name.includes("LP")
    );

  return loading ? (
    <div>Loading your tokens...</div>
  ) : (
    <StyledTable>
      <StyledTR>
        <StyledTH>
          <p>Name</p> <VerticalTableLine />
        </StyledTH>
        <StyledTH>
          <p>Liquidity</p> <VerticalTableLine />
        </StyledTH>
        <StyledTH>
          <p>All time volume</p> <VerticalTableLine />
        </StyledTH>
        <StyledTH>
          <p>Price</p> <VerticalTableLine />
        </StyledTH>
      </StyledTR>
      {tokenRows?.map((token) => {
        const price = +tokens?.find((tkn) => tkn.contract_address === token.id)!
          ?.quote_rate;
        return (
          <StyledTR key={token.id}>
            <Token>
              <span>
                <Token2Logo
                  src={
                    token.symbol.includes("AVAX")
                      ? "/avalanche-avax-logo.png"
                      : `https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/${web3.formatter.address(
                          token.id
                        )}/logo.png`
                  }
                />
                {token.name}
              </span>
            </Token>
            <StyledTD>{formatMoney(token.liquidity * price)}</StyledTD>
            <StyledTD>{formatMoney(token.volumeUSD)}</StyledTD>
            <StyledTD>{formatMoney(price, 2)}</StyledTD>
          </StyledTR>
        );
      })}
    </StyledTable>
  );
};

export default TokensTable;
