import { gql } from "@apollo/client";

export const userTokensQuery = gql`
  query userTokensQuery($tokens: [String] = [""]) {
    tokens(where: { id_in: $tokens }) {
      id
      symbol
      volumeUSD
      untrackedVolumeUSD
      totalSupply
      liquidity
      volume
      decimals
      name
    }
  }
`;
