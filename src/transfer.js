import { ethers } from 'ethers';
import React from 'react'
import abi from  "./tokenName.json";


 const Transfer = () => {

    const myTransfer = async()=>{
        let address= document.getElementById("inp1").value;
console.log(address);

let amount= document.getElementById("inp2").value;
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
await Contract.transfer(address,amount);



    }


  return (
    <div className='transfer'>
        <input placeholder='address' id='inp1' ></input>
        <input placeholder='amount' id='inp2'></input>
        <button onClick={myTransfer} >Send</button>
    </div>
  )
}

export default Transfer;
