import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";
import { AppProps } from "next/app";

// This is the chain your dApp will work on.
const activeChain = "binance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        <title>fcoin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="fcoin official Repository to Showcase the token drop contract, including claim and transfer features."
        />
        <meta
          name="keywords"
          content="fcoin token drop, fcoin token transfer, fcoin token claim, fcoin token claim phases"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
//da terminal rannare i 2 comandi sotto; port3000
//npm install
//yarn run dev