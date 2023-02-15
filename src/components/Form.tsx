import React, {useState,useEffect } from "react";
import { useAccount,useConnect, useBalance,useSigner} from 'wagmi';
import { ethers } from 'ethers';
import { InjectedConnector } from 'wagmi/connectors/injected'
import abi from '../abi.json';
import { contractAddress } from "../smartcontract";

const Form=(props:any)=>{
    const { address, isConnected } = useAccount();
    const { data: signer } = useSigner();
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    });

    const [inputYear,setYear]=useState(0);
    const [inputMake,setInputMake]=useState('');
    const [inputModel,setInputModel]=useState('');
    const [inputVehicleType,setVehicleType]=useState('');
    
    

    
    const handleSubmit=(event:any)=>{

        event.preventDefault();
        const contract =new ethers.Contract(
          contractAddress,
          abi,
          signer ||undefined);

          const addVehicle=async(year:number, make:string, model:string, vehicleType:string)=>{
              const receipt=await contract.
              addVehicle(year,make,model,vehicleType);
          }

        if (inputMake.length>0 &&    (inputVehicleType==='Car' || inputVehicleType==="Motorcycle"|| inputVehicleType==='Truck')){
        
          addVehicle(inputYear,inputMake,inputModel,inputVehicleType,);
         
        
        }else{
          alert('Enter all values !');
        }
      }
    
    if(isConnected){
      return(
          <div className="form">
          <form onSubmit={handleSubmit}> 
         
             <h1>Add Your Classic</h1>
            <div className="form-group">
             <label>Year  
             <input type="number" name="year" 
             onChange={(event)=>{setYear(Number(event?.target.value))}}/>
            </label>
            </div>
           <div className="form-group">
            <label>Make 
              <input type="text"name="make" 
             onChange={(event)=>setInputMake(event?.target.value)}/>
          </label> 
              </div>
              <div className="form-group">
             <label>Model 
              <input type="text" name="model"
              onChange={(event)=>setInputModel(event?.target.value)}/>
            </label>
            </div>
              <div className="form-group">
             <label >Vehicle Type </label>
             <select name="vehicle-type"  
             onChange={(e)=>setVehicleType(e.target.value)}>
             <option value="Car">Car</option>
             <option value="Motorcycle">Motorcycle</option>
             <option value="Truck">Truck</option>
             </select>
             </div>
             <div className="submit-form">
               <input type='submit' name="submit" className="submit-button"
                />
             </div>
           </form>
           </div>
        
      )
    }else{
      return(
        <div className="form">
        <form onSubmit={handleSubmit}> 
         
        <h1>Add Your Classic</h1>
        <div className="form-group">
         <label>Year  
         <input type="number" name="year" disabled={true}
         onChange={(event)=>{setYear(Number(event?.target.value))}}/>
        </label>
        </div>
       <div className="form-group">
        <label>Make 
          <input type="text"name="make" disabled={true}
         onChange={(event)=>setVehicleType(event?.target.value)}/>
      </label> 
          </div>
          <div className="form-group">
         <label>Model 
          <input type="number" name="model" disabled={true}
          onChange={(event)=>setYear(Number(event?.target.value))}/>
        </label>
        </div>
          <div className="form-group">
         <label >Vehicle Type 
         <input type="text" name="vehicle-type" 
         onChange={(event)=>setVehicleType(event?.target.value)}/>
         </label>
         </div>
         <div className="submit-message">
          connect to submit !
            
         </div>
       </form>
       </div>
      )
    }
  }

  export default Form;