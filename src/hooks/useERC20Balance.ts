import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Chain } from "../types";

interface Params {
  chain: Chain;
}

export const useERC20Balance = (params: Params) => {
  const { account } = useMoralisWeb3Api();
  const { isInitialized, chainId, account: walletAddress } = useMoralis();

  const [assets, setAssets] = useState<
    | {
        token_address: string;
        name: string;
        symbol: string;
        logo?: string | undefined;
        thumbnail?: string | undefined;
        decimals: string;
        balance: string;
      }[]
    | undefined
  >();

  useEffect(() => {
    if (isInitialized) {
      fetchERC20Balance().then((balance) => setAssets(balance));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const fetchERC20Balance = async () => {
    return await account
      .getTokenBalances({
        address: walletAddress!,
        chain: params?.chain || (chainId as Chain),
      })
      .then((result) => result);
  };

  return { fetchERC20Balance, assets };
};
