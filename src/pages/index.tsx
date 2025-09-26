import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Barbz Medic - AI Portfolio Health Analytics</title>
        <meta
          name="description"
          content="AI-powered scam detection and portfolio health analytics for Solana. Scan your wallet for risks, detect malicious tokens, and protect your assets."
        />
        <meta property="og:title" content="Barbz Medic - Crypto Portfolio Health Protection" />
        <meta property="og:description" content="AI-powered scam token detection and portfolio risk assessment. Protect your Solana assets from malicious contracts and rug pulls." />
        <meta property="og:image" content="https://barbzmedic.com/logo.png" />
        <meta property="og:url" content="https://barbzmedic.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barbz Medic - AI Scam Detection for Crypto" />
        <meta name="twitter:description" content="Advanced AI analytics for Solana portfolio health. Detect scam tokens, assess risks, and secure your investments." />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
