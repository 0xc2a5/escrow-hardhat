import { ethers } from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow';

export default async function deploy(signer, arbiter, beneficiary, value) {
  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer
  );
  const contract = await factory.deploy(arbiter, beneficiary, { value });

  await fetch("http://localhost:1234/add_contract", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: contract.address,
      arbiter,
      beneficiary,
      value: value.toString()
    })
  });

  return contract;
}
