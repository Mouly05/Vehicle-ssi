const { getContract } = require("./utils");

async function main() {
  const { contract } = await getContract();

  const newOwner = "0x1234567890abcdef1234567890abcdef12345678"; // change as needed
  console.log(`🔄 Transferring ownership of VEH-001 to ${newOwner}...`);

  const tx = await contract.transferOwnership("VEH-001", newOwner);
  console.log(`⏳ Transaction sent: ${tx.hash}`);
  await tx.wait();

  console.log(`✅ Ownership transferred successfully!`);
  console.log(`🔗 View on Etherscan: ${process.env.ETHERSCAN_BASE}${tx.hash}`);
}

main().catch((e) => {
  console.error("❌ Error:", e);
  process.exit(1);
});
