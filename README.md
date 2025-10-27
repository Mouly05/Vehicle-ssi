# 🚘 Vehicle Self-Sovereign Identity (SSI) using Blockchain

This project implements a **Vehicle Self-Sovereign Identity (SSI)** system using **Ethereum smart contracts** and **Decentralized Identity (DID)** concepts.  
It allows secure **vehicle registration, ownership verification, and transfer of ownership** using blockchain technology, ensuring transparency, privacy, and tamper-proof records.

---

## 🌐 Overview

The **Vehicle SSI System** aims to eliminate centralized vehicle record systems by allowing vehicles to have their own **digital identities** on the blockchain.  
Every vehicle is represented by a unique on-chain identity (DID), enabling:

- ✅ Vehicle registration by authorized admins  
- 🔍 Ownership verification  
- 🔄 Secure and trackable transfer of ownership  
- 🔐 Immutable data stored on blockchain  
- 🧾 Frontend DApp for user interaction  

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Smart Contract** | Solidity (Hardhat Framework) |
| **Blockchain** | Ethereum (tested on Sepolia testnet) |
| **Backend Scripts** | Node.js (CommonJS scripts using Ethers.js) |
| **Frontend** | React.js (Vehicle SSI Frontend App) |
| **Wallet** | MetaMask |
| **Network Deployment** | Sepolia / Local Hardhat Network |

---

## 🧱 Project Structure

```
vehicle-ssi/
│
├── contracts/
│   └── VehicleRegistry.sol        # Smart contract defining vehicle identity and ownership
│
├── scripts/
│   ├── deploy.cjs                 # Deploys the contract to blockchain
│   ├── registerVehicle.cjs        # Registers new vehicles
│   ├── transferOwnership.cjs      # Transfers vehicle ownership
│   ├── verifyOwnership.cjs        # Verifies ownership by address
│   ├── getVehicle.cjs             # Fetches vehicle details
│   └── utils.js                   # Helper functions for interaction
│
├── artifacts/                     # Auto-generated contract build files
├── cache/                         # Compilation cache
├── hardhat.config.cjs             # Hardhat configuration file
├── .env                           # Environment variables (RPC URL, private key)
├── package.json
├── vehicle-ssi-frontend/          # React-based DApp frontend
└── README.md
```

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Mouly05/Vehicle-ssi.git
cd vehicle-ssi
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```bash
PRIVATE_KEY=your_metamask_private_key
RPC_URL=https://sepolia.infura.io/v3/your_project_id
```

### 4. Compile the Contract
```bash
npx hardhat compile
```

### 5. Deploy the Contract
```bash
npx hardhat run scripts/deploy.cjs --network sepolia
```

### 6. Run Interaction Scripts
Example – Register a Vehicle:
```bash
node scripts/registerVehicle.cjs
```

### 7. Start Frontend (if included)
```bash
cd vehicle-ssi-frontend
npm install
npm start
```

---

## 🧩 Smart Contract: `VehicleRegistry.sol`

### Functions:
| Function | Description |
|-----------|-------------|
| `registerVehicle(address owner, string memory vin)` | Registers a vehicle with owner address and VIN |
| `transferOwnership(string memory vin, address newOwner)` | Transfers ownership of the vehicle |
| `verifyOwnership(string memory vin)` | Returns the current owner address |
| `getVehicleDetails(string memory vin)` | Fetches vehicle info |

---

## 🔐 Example Use Cases

- 🚗 **Vehicle Registration System** for transport authorities  
- 🪪 **Digital Vehicle ID** for verification by insurance agencies or RTOs  
- 🔄 **Transfer Ownership** between users without paper records  
- 📄 **Immutable Proof of Ownership** on blockchain  

---

## 🧠 Future Enhancements

- 🔗 Integration with **Decentralized Identifiers (DIDs)** and **Verifiable Credentials (VCs)**  
- 🧾 NFT-based Vehicle Identity  
- ☁️ IPFS storage for registration documents  
- 📱 Mobile wallet support for SSI interaction  

---
