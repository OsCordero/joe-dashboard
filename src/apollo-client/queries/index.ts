import { gql } from "@apollo/client";

export const pairTokenFieldsQuery = gql`
  fragment pairTokenFields on Token {
    id
    name
    symbol
    totalSupply
    derivedAVAX
  }
`;

export const pairFieldsQuery = gql`
  fragment pairFields on Pair {
    id
    reserveUSD
    reserveAVAX
    volumeUSD
    untrackedVolumeUSD
    trackedReserveAVAX
    token0 {
      ...pairTokenFields
    }
    token1 {
      ...pairTokenFields
    }
    reserve0
    reserve1
    token0Price
    token1Price
    totalSupply
    txCount
    timestamp
  }
  ${pairTokenFieldsQuery}
`;

export const userPairsQuery = gql`
  query userPairsQuery(
    $first: Int! = 1000
    $orderBy: String! = "liquidityTokenBalance"
    $orderDirection: String! = "desc"
    $id: ID!
  ) {
    user(id: $id) {
      liquidityPositions(
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
      ) {
        pair {
          ...pairFields
          oneDay @client
          sevenDay @client
        }
      }
    }
  }
  ${pairFieldsQuery}
`;
