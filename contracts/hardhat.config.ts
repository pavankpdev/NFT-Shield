require('dotenv').config()
require('solidity-coverage')

import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@typechain/hardhat";


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.0",
  },
  networks: {
    amoy: {
      url: `https://rpc-amoy.polygon.technology/`,
      chainId: 80002,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY as string],
    },
  },
  namedAccounts: {
    admin: 0,
  },
  paths: {
    sources: "src",
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
  etherscan: {
    apiKey: process.env.EXPLORER_API_KEY || "",
  },
};
export default config;
