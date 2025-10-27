require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const args = process.argv.slice(2);
  const contractAddress = args[0] || process.env.CONTRACT_ADDRESS;
  const vehicleId = args[1] || "VEH-001";

  if (!contractAddress) {
    console.error("Provide CONTRACT_ADDRESS as first arg or set CONTRACT_ADDRESS in .env");
    process.exit(1);
  }

  const provider = new hre.ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC);
  const registry = await hre.ethers.getContractAt("VehicleRegistry", contractAddress, provider);

  const v = await registry.getVehicle(vehicleId);
  console.log("Vehicle details:", {
    regNo: v[0],
    model: v[1],
    chassisNo: v[2],
    owner: v[3]
  });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
