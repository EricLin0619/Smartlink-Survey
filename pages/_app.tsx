import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import WagmiProvider from "../src/wagmiProvider";
import Navbar from "./components/navbar";

import '../styles/LearningOptions.css';
import '../styles/App.css';
import '../styles/Chatbot.css';
import '../styles/Chat.css';
import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "../src/chatbot/config";
import MessageParser from "../src/chatbot/MessageParser";
import ActionProvider from "../src/chatbot/ActionProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="mx-10 mt-6">
      <WagmiProvider>
        <Navbar />
        <Component {...pageProps} />
      </WagmiProvider>
      <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>
    </div>
    </main>
  );
}

export default MyApp;
