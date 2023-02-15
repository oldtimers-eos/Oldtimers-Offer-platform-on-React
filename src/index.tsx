import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter
} from "react-router-dom";
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import {polygonMumbai} from '@wagmi/core/chains'
const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
   [ publicProvider({ priority: 1 }),
    alchemyProvider({ apiKey: 'bNsaGWutx61JHUnUwxG_S6bFgFZd7Bxe',priority: 2 })

 ]
);

  const client = createClient({
    autoConnect: true,
    connectors:[
      new MetaMaskConnector({ chains }),
    ],
    provider,
    webSocketProvider,
  })
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
     <BrowserRouter>
    <App />
    </BrowserRouter>
    </WagmiConfig>
  </React.StrictMode>
);

