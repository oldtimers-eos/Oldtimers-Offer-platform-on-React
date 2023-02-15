import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import { useAccount, useConnect, useDisconnect , useBalance,useSigner} from 'wagmi'
import abi from '../abi.json';
import { contractAddress } from "../smartcontract";
import { ContainerDetails } from './AddDetailsForm/ContainerDetails';



 


const YourVehicleList=()=>{

    type Vehicle={
        id:string;
        year:string;
        make:string;
        model:string;
        vehicleType:string;
        time:string;
        owner:string;
        rentAvailable:string;
        priceRentPerDay:string;
        ableToAddDetails:number;   
    }

    const { data: signer } = useSigner();
    const [vehicleID,setVehicleID]=useState(0);
    const [vehicles,setVehicles]=useState<Vehicle[]>([]);
    const { address, isConnected } = useAccount();
    const [isLoading, setIsLoading] = useState(true);
    
   

        useEffect(()=>{
           if(vehicles.length<vehicleID){
            fetchVehicles();
           
           }
        },[vehicleID])

        useEffect(()=>{
            fetchId();
        },[signer])

const fetchId=async ()=>{
    const contract =new ethers.Contract(
        contractAddress,
        abi,
        signer ||undefined);
        
        const receiptId=await contract.vehicleID();
        setVehicleID(receiptId?.toString());
 
        }
        const fetchVehicles=async()=>{
            const contract =new ethers.Contract(
                contractAddress,
                abi,
                signer ||undefined);

                for(let i=1;i<vehicleID;i++){
                   const receiptVehicles=await contract.vehicles(i);
                   const detailsVehicles=await contract.details(i);
                   const formatDate= new Date(Number(receiptVehicles.time * 1000))
                   .toLocaleDateString('en-US')
                   .toString();
           


              vehicles.push({id:receiptVehicles.id.toString(),
              year:receiptVehicles.year.toString(),
              make:receiptVehicles.make.toString(),
              model:receiptVehicles.model.toString(),
              vehicleType:receiptVehicles.vehicleType.toString(),
              time:formatDate,
              owner:receiptVehicles.owner.toString(),
              rentAvailable:detailsVehicles.rentAvailable.toString(),
              priceRentPerDay:detailsVehicles.priceRentPerDay.toString(),
              ableToAddDetails:detailsVehicles.ableToAddDetails.toString()    
            });
   
                    }
                    setIsLoading(false);
                }
 const renderList= vehicles.filter(item=>item.owner===address).map((vehicle)=>{
          
       const time = Math.floor(Date.now() / 1000);

       const triggerText = 'Add Details';
    
       const onSubmit = (event:any) => {
        event.preventDefault(event);
        console.log(event.target.rentAvailable.value);
        console.log(event.target.buyAvailable.value);
        addDetailsToVehicle(vehicle.id, event.target.exteriorColor.value, event.target.interiorColor.value, 
            event.target.transmission.value, event.target.odometer.value, event.target.rentAvailable.value, 
            event.target.priceRentPerDay.value, event.target.buyAvailable.value, event.target.priceForVehicle.value);
        };

       const renderButton=()=>{
        if (vehicle.ableToAddDetails<=time){
            return <ContainerDetails triggerText={triggerText} onSubmit={onSubmit} />
        }
            return <button className="rent-button-disabled">You can't add Details at the moment</button>
    }
       
            return (<div className="vehicle-list-2"key={vehicle.id}>
              
                <div className="lest-element">

                    {vehicle.id}
                </div >
                <div className="lest-element">
                  {vehicle.year}
                  </div>
                  <div className="lest-element">
                  {vehicle.make}
                  </div> 
                   <div className="lest-element">
                  {vehicle.model}
                  </div>
                  <div className="lest-element">
                 {vehicle.vehicleType}
                 </div>
               {renderButton()}
                
               
            </div>   
            )
    })
 
 
    const addDetailsToVehicle=async (_id:string, ecolor:string, icolor:string, transmission:string,
        odometer:number, rentAvailable:boolean, priceRentPerDay:number, buyAvailable:boolean, priceForVehicle:number)=>{
        const contract =new ethers.Contract(
            contractAddress,
            abi,
            signer ||undefined);
        const receipt=await contract.addDetailsToVehicle(_id, ecolor, icolor, transmission, odometer, 
            rentAvailable, priceRentPerDay, buyAvailable, priceForVehicle);
        
    }


   
       return(
    <div>
       {renderList}
             
        </div>   
        )
       
    

    
}


export default YourVehicleList;