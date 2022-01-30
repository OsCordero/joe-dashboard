import type { AppProps } from "next/app";
// import Layout from "../src/components/Layout";
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from "styled-components";

import "../styles/globals.css";
import Navbar from "../src/components/home/Navbar/Navbar";
import Footer from "../src/components/home/Footer/Footer";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo-client";

const theme = {
  colors: {
    bg: "#F2F9FF",
    primary: "#7408f8",
    text: "#151531",
    avalancheRed: "#ea4142",
    linkRed: "#F2716A",
  },
  title: {
    margin: "36px",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <MoralisProvider
            appId={process.env.NEXT_PUBLIC_APP_ID!}
            serverUrl={process.env.NEXT_PUBLIC_SERVER_URL!}
          >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </MoralisProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
