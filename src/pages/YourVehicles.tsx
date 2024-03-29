import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect , useBalance,useSigner} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import UserData from "../components/UserData";
import Form  from "../components/Form";
import YourVehicleList from "../components/YourVehicleList";



function YourVehicles(){

  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useBalance({address:address})
  const { data:signer } = useSigner();
 

  const [numberPuted,setNumberPuted]=useState(0);

let addressString:string | undefined=`${address?.slice(0,3)}...${address?.slice(38,42)}`;

   

  if (isConnected) {
    
    return (
        <div>
        <div className="wallet-balance">
      <div className="wallet"> { addressString}
        </div>
      </div>
      <div >
        <UserData numberPuted={numberPuted} setNumberPuted={setNumberPuted}/>
      </div>
      <div className="vehicle-list-2">
      
          <strong>Id</strong>
          <strong>Year</strong>
          <strong>Make</strong>
          <strong>Model</strong>
          <strong>Vehicle Type</strong>
          <strong>Action</strong>
          
        </div>
        
           <YourVehicleList/>
           
           
           </div>
       
      
    )
  }
  if (isConnected){
  return (
  <div>
    <UserData numberPuted={numberPuted} setNumberPuted={setNumberPuted}/>
       <Form/>
  </div>
  )
  }
  return(
    <div>
     <UserData numberPuted={numberPuted} setNumberPuted={setNumberPuted}/>
     <YourVehicleList/>
    </div>
  )
}
export default YourVehicles;