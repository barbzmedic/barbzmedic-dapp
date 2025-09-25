import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Aiprice AI - Intelligent Solana Portfolio Analytics</title>
        <meta
          name="description"
          content="AI-powered Solana portfolio tracker with predictive analytics. Connect your wallet to access smart insights and real-time market intelligence."
        />
        <meta property="og:title" content="Aiprice AI - Smart Crypto Portfolio Management" />
        <meta property="og:description" content="Leverage artificial intelligence to optimize your Solana investments. Real-time analytics, predictive insights, and portfolio optimization tools." />
        <meta property="og:image" content="https://aiprice.com/og-image.png" />
        <meta property="og:url" content="https://aiprice.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aiprice AI - AI-Powered Crypto Analytics" />
        <meta name="twitter:description" content="Next-generation portfolio intelligence for Solana blockchain. Smart insights, predictive analytics, and AI-driven recommendations." />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
