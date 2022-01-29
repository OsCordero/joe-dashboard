import Head from "next/head";
import Heading from "../src/components/styled/Heading";
import Grid from "../src/components/home/Grid/Grid";
import {
  useERC20Balances,
  useMoralis,
  useMoralisWeb3Api,
  useNativeBalance,
  useTokenPrice,
} from "react-moralis";
import { useEffect, useState } from "react";

const scam = [
  "0xe4fb1bb8423417a460286b0ed44b64e104c5fae5",
  "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819",
  "0x9a642d6b3368ddc662CA244bAdf32cDA716005BC",
];
import {
  StyledLink,
  PrimaryButton,
  AddressButton,
  AvaxLogo,
  AvalancheButton,
} from "../src/components/commons/lib";
import { useQuery } from "@apollo/client";
import { pairQ, userPairsQuery } from "../src/apollo-client/queries";
import Cards from "../src/components/home/Cards/Cards";
import Table from "../src/components/home/Table/Table";

export default function Contact() {
  const {
    getBalances,
    data: balance,
    nativeToken,
    error,
  } = useNativeBalance({ chain: "0x89" });
  const [balances, setBalances] = useState<any>([]);
  const [historyValue, setHistoryValue] = useState<any>([]);

  const { data: pairsData } = useQuery(userPairsQuery, {
    variables: { id: "0x00000000005ef87f8ca7014309ece7260bbcdaeb" },
  });

  const { data: pairData } = useQuery(pairQ);
  let total = 0;
  pairData?.pair?.hourData?.forEach((dataH: any) => {
    total = total + +dataH.untrackedVolumeUSD;
  });
  console.log("TOTAL", total);

  const {
    authenticate,
    logout,
    isAuthenticated,
    account,
    Moralis,
    isInitialized,
  } = useMoralis();
  const dataToken = useTokenPrice({
    address: "0x4c28f48448720e9000907bc2611f73022fdce1fa",
    chain: "0x89",
  });
  const Web3Api = useMoralisWeb3Api();

  const { data, fetchERC20Balances, isFetching, isLoading } = useERC20Balances({
    address: "0x03f458cFD32602e7E65FeFc76F98eab514971f0a",
    chain: "0x89",
  });
  const handleLogin = () => {
    authenticate();
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    console.log("HERE", account);
    if (account) {
      fetch(
        `https://api.covalenthq.com/v1/137/address/0x0C7917000E7aE7d5b0E6E9f1CC65cA5CC2B5C2aA/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_3a85537ab9ad4012bfbc1fbf324`
      )
        .then((res) => res.json())
        .then((data) => console.log("BALANCES", data.data.items))
        .catch((err) => console.log("ERRRRRRROR", err));
    }
  }, [isAuthenticated, isInitialized, account]);

  useEffect(() => {
    console.log("HERE", account);
    if (account) {
      fetch(
        `https://api.covalenthq.com/v1/137/address/0x0C7917000E7aE7d5b0E6E9f1CC65cA5CC2B5C2aA/portfolio_v2/?key=ckey_3a85537ab9ad4012bfbc1fbf324`
        // `https://api.covalenthq.com/v1/1/address/demo.eth/portfolio_v2/?key=ckey_docs`
      )
        .then((res) => res.json())
        .then((data) => console.log("PORTFOLIO", data.items))
        .catch((err) => console.log("ERRRRRRROR", err));
    }
  }, [isAuthenticated, isInitialized, account]);

  useEffect(() => {
    Moralis.enableWeb3().then((web3) => {
      console.log(
        "WEB3",
        web3.formatter.address("0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664")
      );
    });
  }, []);

  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cards />
      <Table />
    </>
  );
}
