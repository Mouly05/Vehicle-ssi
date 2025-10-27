const { getContract } = require("./utils");

async function main() {
  const { contract, wallet } = await getContract();

  console.log("🚗 Registering vehicle...");
  const tx = await contract.registerVehicle("VEH-001", "TN-30-BA-9469", "2025", "CHSN1234");
  console.log(`⏳ Transaction sent: ${tx.hash}`);
  await tx.wait();

  console.log(`✅ Vehicle registered successfully!`);
  console.log(`🔗 View on Etherscan: ${process.env.ETHERSCAN_BASE}${tx.hash}`);
}

main().catch((e) => {
  console.error("❌ Error registering vehicle:", e);
  process.exit(1);
});
