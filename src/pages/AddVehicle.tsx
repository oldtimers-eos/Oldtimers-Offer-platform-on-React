import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useAccount, useConnect, useDisconnect , useBalance, useSigner} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import abi from '../abi.json'
import UserData from "../components/UserData";
import Form  from "../components/Form";
import {contractAddress} from "../smartcontract";


function AddVehicle(){

  // Hooks
  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useBalance({address:address})
  const { data: signer } = useSigner();
  const { disconnect } = useDisconnect()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  //States
  const [numberPuted,setNumberPuted]=useState(0);
  
let addressString:string | undefined=`${address?.slice(0,3)}...${address?.slice(38,42)}`;

useEffect(()=>{

  
})


const fetchNumberPuted=async ()=>{
  const contract =new ethers.Contract(
    contractAddress,
    abi,
    signer ||undefined);
    const receipt=await contract.numberOfPetsForAdoption(address);
    setNumberPuted(Number(receipt));
}
useEffect(()=>{
    fetchNumberPuted();
})

const renderFormOrMaximumPage= ()=>{
  const numberOfPuted= numberPuted
      return <Form/>
  }



  if (isConnected) {
    return (
        <div>
        <div className="wallet-balance">
      <div className="wallet"> { addressString}
        </div>
      </div>
      <div >
       <UserData numberPuted={numberPuted} setNumberPuted={setNumberPuted} />
      </div>
       {renderFormOrMaximumPage()}
        </div>
     
    )
  }
  return (
  <div>
    <UserData numberPuted={numberPuted} setNumberPuted={setNumberPuted} />
       <Form/>
  </div>
  )
          
}
export default AddVehicle