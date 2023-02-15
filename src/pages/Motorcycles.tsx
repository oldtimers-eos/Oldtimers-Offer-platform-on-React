import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect , useBalance,useSigner} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Balance from "../components/Balance";
import UserData from "../components/UserData";
import Form  from "../components/Form";
import MotorcycleList from "../components/MotorcycleList";


function Motorcycles(){

  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useBalance({address:address})
  const { data:signer } = useSigner();
 

  const [numberPuted,setNumberPuted]=useState(0);
  const [petList,setPetList]=useState([]);

let addressString:string | undefined=`${address?.slice(0,3)}...${address?.slice(38,42)}`;

  if (isConnected) {
    
    return (
        <div>
        <div className="wallet-balance">
      <div className="wallet"> { addressString}
        </div>
        <div className="balance"><Balance/></div>

      </div>
      <div >
        <UserData numberPuted={numberPuted} setNumberPuted={setNumberPuted}/>
      </div>
      <div className="vehicle-list">
        
          <strong>Id</strong>
          <strong>Year</strong>
          <strong>Make</strong>
          <strong>Model</strong>
          <strong>Vehicle Type</strong>
          <strong>Time</strong>
          <strong>Rent Available</strong>
          <strong>Price for Rent (daily)</strong>
          <strong>Action</strong>
          
        </div>
        
           <MotorcycleList/>
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
     <MotorcycleList/>
    </div>
  )
}
export default Motorcycles;