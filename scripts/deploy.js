const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const value = ethers.parseEther("0.01");
    const escrow = await ethers.deployContract("Escrow", { value });
    await escrow.waitForDeployment();
    console.log(`Escrow address: ${escrow.target} with balance: ${ethers.formatEther(value)}ETH`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// npx hardhat run ./scripts/deploy.js --network sepolia
// 0xa2FADA3a36a3Abd53F6a50a62D8Bae52547104F0
