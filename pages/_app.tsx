import type { AppProps } from "next/app";
// import Layout from "../src/components/Layout";
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from "styled-components";

import "../styles/globals.css";
import Navbar from "../src/components/home/Navbar/Navbar";
import Footer from "../src/components/home/Footer/Footer";

const theme = {
  colors: {
    bg: "#F2F9FF",
    primary: "#7408f8",
    text: "#151531",
  },
  title: {
    margin: "36px",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_APP_ID);

  return (
    <>
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
    </>
  );
}

export default MyApp;
