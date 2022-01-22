import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { MoralisProvider } from "react-moralis";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_APP_ID);

  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID!}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL!}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  );
}

export default MyApp;
