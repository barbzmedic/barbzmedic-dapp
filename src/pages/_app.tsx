import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            {/* Основные мета-теги */}
            <title>Barbz Medic - AI Portfolio Health Analytics</title>
            <meta name="description" content="AI-powered scam detection and portfolio health analytics for Solana. Scan your wallet for risks, detect malicious tokens, and protect your assets." />
            <meta name="keywords" content="solana, crypto, portfolio, analytics, scam detection, AI, blockchain, defi, security" />
            <meta name="author" content="Barbz Medic" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://barbzmedic.com/" />
            <meta property="og:title" content="Barbz Medic - AI Portfolio Health Analytics" />
            <meta property="og:description" content="AI-powered scam token detection and portfolio risk assessment. Protect your Solana assets from malicious contracts." />
            <meta property="og:image" content="https://barbzmedic.com/logo.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://barbzmedic.com/" />
            <meta property="twitter:title" content="Barbz Medic - AI Scam Detection for Crypto" />
            <meta property="twitter:description" content="Advanced AI analytics for Solana portfolio health. Detect scam tokens, assess risks, and secure your investments." />
            <meta property="twitter:image" content="https://barbzmedic.com/logo.png" />
            
            {/* Дополнительные мета-теги */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href="https://barbzmedic.com" />
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar/>
              <ContentContainer>
                <Component {...pageProps} />
                <Footer/>
              </ContentContainer>
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
