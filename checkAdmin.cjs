require("dotenv").config();
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const registryAddress = "0x6459c9BD41fDBAA9E23446DA00E7a299e9f6Ca2a";
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC);

  const abi = ["function admin() view returns (address)"];
  const registry = new ethers.Contract(registryAddress, abi, provider);

  const admin = await registry.admin();
  console.log("Admin of contract:", admin);
}

main().catch(console.error);
