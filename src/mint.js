import { ethers } from "ethers";
import React from "react";
import abi from "./tokenName.json";

const Mint = () => {
  const mintToken = async () => {
    let address = document.getElementById("mint1").value;
    console.log(address);

    let amount = document.getElementById("mint2").value;
    console.log(amount);



    amount = ethers.utils.parseUnits(amount, 18);
const provider = new ethers.providers.Web3Provider(window.ethereum);

let dollar;
dollar = new ethers.Contract(
    "0xd4b66bA291C1f53380191F31Ad11533993A1AcBA",
    abi,
    provider
);

const signer = provider.getSigner();
const Contract = dollar.connect(signer);
await Contract.mint(address,amount);


  };

  return (
    <div className="mint">
      <input placeholder="address" id="mint1"></input>
      <input placeholder="amount" id="mint2"></input>

      <button onClick={mintToken}>mint Token</button>
    </div>
  );
};

export default Mint;
