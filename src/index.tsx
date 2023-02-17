import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter
} from "react-router-dom";
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { Chain } from 'wagmi'
 
export const EOSevmTestnet = {
  id: 15556,
  name: 'EOS-EVM',
  network: 'eosevm-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'EOS-EVM',
    symbol: 'EOS',
  },
  rpcUrls: {
    public: { http: ['https://api-testnet.trust.one'] },
    default: { http: ['https://api-testnet.trust.one'] },
  },
  blockExplorers: {
    etherscan: { name: 'EOSexplorer', url: 'https://explorer-testnet.trust.one/' },
    default: { name: 'EOSexplorer', url: 'https://explorer-testnet.trust.one/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain


const { chains, provider, webSocketProvider } = configureChains(
  [EOSevmTestnet],
   [ publicProvider({ priority: 1 }) ]
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

