require("dotenv").config();
const hre = require("hardhat");

async function getContract() {
  const provider = new hre.ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const VehicleRegistry = await hre.ethers.getContractFactory("VehicleRegistry", wallet);
  const contract = VehicleRegistry.attach(process.env.CONTRACT_ADDRESS);

  return { contract, wallet };
}

module.exports = { getContract };
