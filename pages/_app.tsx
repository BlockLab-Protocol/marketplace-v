import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";
import Head from 'next/head';

//import { WagmiConfig } from "wagmi";
//import { useEffect, useState } from "react";

const metadata = {
	name: "Blockswap-Protocol-Marketplace",
	description: "Trade and List your NFT",
	url: "https://blockswap-protocol.vercel.app",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <title>{metadata.name}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.name} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.icons[0]} />
        {/* Add more meta tags as needed */}
    </Head>
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={NETWORK}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
    </>
  );
}

export default MyApp;
