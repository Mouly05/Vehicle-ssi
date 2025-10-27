const hre = require("hardhat");
const fs = require("fs");
require("dotenv").config();

async function main() {
  console.log("🚀 Deploying VehicleRegistry...");

  const VehicleRegistry = await hre.ethers.getContractFactory("VehicleRegistry");
  const vehicleRegistry = await VehicleRegistry.deploy();
  await vehicleRegistry.waitForDeployment();

  const contractAddress = await vehicleRegistry.getAddress();
  console.log(`✅ VehicleRegistry deployed successfully to: ${contractAddress}`);

  // --- Write to .env ---
  const envFile = fs.readFileSync(".env", "utf-8");
  const updatedEnv = envFile.replace(/CONTRACT_ADDRESS=.*/g, `CONTRACT_ADDRESS=${contractAddress}`);
  fs.writeFileSync(".env", updatedEnv);

  console.log("📄 Updated .env with CONTRACT_ADDRESS ✅");
}

main().catch((err) => {
  console.error("❌ Deployment failed:", err);
  process.exit(1);
});
