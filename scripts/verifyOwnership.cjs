const { getContract } = require("./utils");

async function main() {
  const { contract } = await getContract();

  console.log("🔍 Checking ownership...");
  const owner = await contract.verifyOwnership("VEH-001");

  console.log(`✅ Current owner of VEH-001: ${owner}`);
}

main().catch((e) => {
  console.error("❌ Error:", e);
  process.exit(1);
});
