export interface Token0 {
  __typename: string;
  name: string;
}

export interface BasePair {
  __typename: string;
  token0Price: string;
  token1Price: string;
  token0: Token0;
}

export interface Token {
  __typename: string;
  id: string;
  name: string;
  symbol: string;
  volumeUSD: number;
  untrackedVolumeUSD: number;
  totalSupply: string;
  liquidity: number;
  volume: number;
  decimals: string;
  basePairs: BasePair[];
}

export interface UserTokensResponse {
  tokens: Token[];
}
