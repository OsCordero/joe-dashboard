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
    hourData(
      first: 24
      where: { date_gt: 1622419200 }
      orderBy: date
      orderDirection: desc
    ) {
      date
      untrackedVolumeUSD
      volumeToken0
      volumeToken1
      volumeUSD
    }
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
        }
      }
    }
  }
  ${pairFieldsQuery}
`;

export const pairQ = gql`
  {
    pair(id: "0xa389f9430876455c36478deea9769b7ca4e3ddb1") {
      id
      token0 {
        symbol
      }
      token1Price
      token1 {
        symbol
      }
      dayData {
        volumeUSD
      }
      hourData(
        first: 24
        where: { date_gt: 1622419200 }
        orderBy: date
        orderDirection: desc
      ) {
        date
        untrackedVolumeUSD
        volumeToken0
        volumeToken1
        volumeUSD
      }
      reserve0
      reserve1
      reserveAVAX
      reserveUSD
    }
  }
`;
