export interface Token {
  __typename: string;
  id: string;
  name: string;
  symbol: string;
  totalSupply: string;
  derivedAVAX: string;
}

export interface HourData {
  __typename: string;
  date: number;
  untrackedVolumeUSD: string;
  volumeToken0: string;
  volumeToken1: string;
  volumeUSD: string;
}

export interface Pair {
  __typename: string;
  id: string;
  reserveUSD: string;
  reserveAVAX: string;
  volumeUSD: string;
  untrackedVolumeUSD: string;
  trackedReserveAVAX: string;
  token0: Token;
  token1: Token;
  reserve0: string;
  reserve1: string;
  token0Price: string;
  token1Price: string;
  totalSupply: string;
  txCount: string;
  timestamp: string;
  hourData: HourData[];
}

export interface LiquidityPosition {
  __typename: string;
  pair: Pair;
}

export interface User {
  __typename: string;
  liquidityPositions: LiquidityPosition[];
}

export interface UserPoolsResponse {
  user: User;
}
