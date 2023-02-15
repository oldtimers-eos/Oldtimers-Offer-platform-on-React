import React, { useEffect, useState } from "react";
import { useAccount,useConnect, useBalance,useSigner} from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'
import { ethers } from 'ethers';
import abi from '../abi.json';
import Form from "./Form";
import { contractAddress } from "../smartcontract";
const UserData=(props:any)=>{

const { address, isConnected } = useAccount();
const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { data: signer } = useSigner();

  const [totalNumberOfVehicles,setNumberOfVehicles]=useState<number>(0);
  const [rentFee,setRentFee]=useState<number>(0);
  const [buyFee,setBuyFee]=useState<number>(0);
  

  useEffect(()=>{
    fetchVehiclesData();
    props.setNumberPuted(totalNumberOfVehicles)
    
  })

  const fetchVehiclesData=async()=>{
    const contract =new ethers.Contract(
      contractAddress,
      abi,
      signer ||undefined);
       // fetching total number of vehicles
    const totalNumberVehicles=await contract.vehicleID();
    setNumberOfVehicles(totalNumberVehicles?.toString());
       // fetching service fee for renting
    const rentFeeAmount=await contract.rentFee();
    setRentFee(rentFeeAmount?.toString());
      // fetching service fee for buying
    const buyFeeAmount=await contract.buyFee();
    setBuyFee(buyFeeAmount?.toString());
  }

  const newVehiclesNumber = (totalNumberOfVehicles) - 1;
  const newRentFee = (rentFee) / 10**18;
  const newBuyFee = (buyFee) / 10**18;
   

    if(isConnected){
      
      return (
      <div className="user-data">
        <p>Total Vehicles : {newVehiclesNumber}</p>
       <div className="adopted">
                <p>Rent Fee : {newRentFee} EOS</p>
                <p>Buy Fee : {newBuyFee} EOS</p>
        </div>
      </div>
    )
      }else{
          return(
              <div className="user-data-without-wallet">
                       
                <p>Total Vehicles: {totalNumberOfVehicles}</p>
                <p>Rent Fee : {rentFee}
                <button onClick={() => connect()} className="connect-wallet">Connect </button></p>
                <p>Buy Fee : {buyFee}</p>
              </div>
               )
      }
   
}

export default UserData;