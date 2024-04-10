"use client";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
} from "@rainbow-me/rainbowkit/wallets";
import type { Transport } from "viem";
import { createConfig, http } from "wagmi";
import {
  sepolia,
  polygonMumbai,
} from "wagmi/chains";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        coinbaseWallet,
      ],
    },
  ],
  { appName: "web3", projectId: 'c4f79cc821944d9680842e34466bfb' },
);

const transports: Record<number, Transport> = {
  [sepolia.id]: http(),
  [polygonMumbai.id]: http(),
};

export const wagmiConfig = createConfig({
  chains: [
    sepolia,
    polygonMumbai,
  ],
  connectors,
  transports,
  ssr: true,
});
