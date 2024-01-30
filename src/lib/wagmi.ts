import "wagmi/window";
import { createConfig, Chain  } from "wagmi";
import { createPublicClient, http } from "viem";
import { mainnet, polygon } from "viem/chains";
import { getDefaultConfig } from "connectkit";

const alchemyId = process.env.ALCHEMY_API_KEY;
const alchemyPolygonId = process.env.ALCHEMY_POLYGON_API_KEY;
const walletConnectProjectID = "6c37429d912cb97065107c0f849bc879";

const areonNetworkTestnet: Chain = {
  id: 462, // Chain ID
  name: 'Areon Network Testnet',
  network: 'areon',
  nativeCurrency: {
    name: 'TAREA',
    symbol: 'TAREA', // Currency Symbol
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://testnet-rpc3.areon.network'] } ,
    public: { http: ['https://testnet-rpc3.areon.network'] } // Include the public key if required by the Chain type
  },
  blockExplorers: {
    default: { name: 'AreonScan', url: 'https://areonscan.com' },
  },
  testnet: true,
};


const wagmiConfig = createConfig(
  getDefaultConfig({
    alchemyId,
    walletConnectProjectId: walletConnectProjectID,
    appName: "Crypto Defense",
    appDescription: "Isometric game. Build and Defence in the onchain crypto world",
    appUrl: "https://crypto-defense.vercel.app",
    appIcon: "https://crypto-defense.vercel.app//assets/logotype.png",
    chains: [areonNetworkTestnet]
    
  }),
);

const client = createPublicClient({
  chain: areonNetworkTestnet,
  transport: http("https://testnet-rpc3.areon.network")
});

const polygonClient = createPublicClient({
  chain: polygon,
  transport: http("https://testnet-rpc3.areon.network")
})

export { client, polygonClient, wagmiConfig };
