import React, { useState } from 'react'
import "./App.css";
import { ethers } from 'ethers';

import abi from  "./tokenName.json";


const Main = () => {
    const [name, setName]=useState(null);
    const [symbol, setSymbol]=useState(null);
    const [supply, setSupply]=useState(null);
    const [decimel, setDecimel]=useState(null);
    const [balance, setBalance]=useState(null);
    const [address, setAddress]=useState(null);

    const details = async ()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let dollar;

        dollar = new ethers.Contract(
            "0xd4b66bA291C1f53380191F31Ad11533993A1AcBA",
            abi,
            provider
        );
       setName(await dollar.name());
       setSymbol(await dollar.symbol());
       let supply=await dollar.totalSupply(); 
       supply = ethers.utils.formatUnits(supply,18);
       setSupply(supply);
      let dec= await dollar.decimals();
      dec = ethers.utils.formatUnits(dec,0);
       setDecimel(dec);
    }


    const mybalance = async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let dollar;
        dollar = new ethers.Contract(
            "0xd4b66bA291C1f53380191F31Ad11533993A1AcBA",
            abi,
            provider
        );
        const signer = provider.getSigner();
        let bal = ethers.BigNumber.from(await dollar.balanceOf(signer.getAddress())).toString();
        bal = ethers.utils.formatUnits(bal,18)
        setBalance(bal);
        console.log(bal);
        // console.log(signer.getAddress(),"this is balance")
        setAddress(await signer.getAddress())
    
      }

      const myAddress=async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
       
        const signer = provider.getSigner();
        
        // console.log(signer.getAddress(),"this is balance")
        setAddress(await signer.getAddress())

      }




    // funnction for connection
    // const  connect= async ()=>{
    //     let web3;

    //     await window.web3.currentProvider.enable();
    //     web3 = new Web3(window.web3.currentProvider);
        
    //     const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    //     const account = accounts[0];
    //     console.log(account);

    // }


    const connectWallet = async () => {
      
        // Check if MetaMask is installed on user's browser
        if(window.ethereum) {
         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
         const chainId = await window.ethereum.request({ method: 'eth_chainId'});
         console.log(accounts);
        } else {
          // Show alert if Ethereum provider is not detected
          alert("Please install Mask");
        }
      }
  return (
    <>
        <div className="first">
        <button onClick={connectWallet}>connect wallet</button>
          <div className="address">
            <p>{address}</p>
          </div>
          <button onClick={myAddress}>get address</button>

          <div className="balance">
            <p>  {balance}</p>
          </div>
          <button onClick={mybalance}>get balance</button>


          <div className="second">
     <div className="btnDetails">
     <button onClick={details} >GET DETAILS ABOUT</button>
     </div>
 
              <div className="s1">
              <h3>token</h3>
              <div className="token">
                  <p>{name}</p>
              </div>
              </div>
              <div className="s2">
              <h3>symbol</h3>
              <div className="symbol">
              <p>{symbol}</p>

              </div>

              </div>
              <div className="s3">
              <h3>total supply</h3>
              <div className="supply">
              <p>{supply}</p>

              </div>

              </div>
              <div className="s4">
              <h3>decimel</h3>
              <div className="decimel">
              <p>{decimel}</p>

              </div>
              </div>
          </div>



          {/* this div is for transfer function  */}
          {/* <div className='transfer'></div> */}
        </div>
      </>
  )
}
export  default Main;
