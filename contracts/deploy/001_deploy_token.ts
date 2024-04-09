import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { admin } = await getNamedAccounts();

  const collection = {
    name: "CAD Collection",
    symbol: "CAD",
  }

  await deploy('NFTShield', {
    args: [...Object.values(collection)],
    from: admin,
    log: true,
  });
};
export default func;
func.tags = ["NFTShield"];
