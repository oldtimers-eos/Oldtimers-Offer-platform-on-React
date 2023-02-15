import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import { useAccount, useConnect, useDisconnect , useBalance,useSigner} from 'wagmi'
import abi from '../abi.json';
import { contractAddress } from "../smartcontract";
import { ContainerDays } from './AddDaysForm/ContainerDays';

const TruckList=()=>{

    type Vehicle={
        id:string;
        year:string;
        make:string;
        model:string;
        vehicleType:string;
        time:string;
        rentAvailable:string;
        priceRentPerDay:string;
    }

    const [rentFee,setRentFee]=useState<number>(0);

    useEffect(()=>{
        fetchVehiclesData();
      })

    const fetchVehiclesData=async()=>{
        const contract =new ethers.Contract(
          contractAddress,
          abi,
          signer ||undefined);
           // fetching service fee for renting
        const rentFeeAmount=await contract.rentFee();
        setRentFee(rentFeeAmount?.toString());
      }
      const newRentFee = (rentFee) / 10**18;

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
              rentAvailable:detailsVehicles.rentAvailable.toString(),
              priceRentPerDay:detailsVehicles.priceRentPerDay.toString()   
            });
   
                    }
                    setIsLoading(false);
                }

    const renderList= vehicles.filter(item=>item.vehicleType==="Truck").map((vehicle)=>{

    const triggerText = 'Rent';
    
       const onSubmit = (event:any) => {
        event.preventDefault(event);
        rentVehicle(vehicle.id, event.target.days.value);
        };
          
       const renderButton=()=>{
        if (vehicle.rentAvailable=='true'){
            return <ContainerDays triggerText={triggerText} onSubmit={onSubmit} />
        }
            return <button className="rent-button-disabled">Not available for Renting at this moment</button>
    }
       
            return (<div className="vehicle-list"key={vehicle.id}>
              
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
                 <div className="lest-element">
                  {vehicle.time}
                  </div>
                  <div className="lest-element">
                  {vehicle.rentAvailable}
                  </div>
                  <div className="lest-element">
                  {vehicle.priceRentPerDay} EOS
                  </div>
               {renderButton()}
                
               
            </div>   
            )
    })
 

const rentVehicle=async (_id:string, _day:string)=>{
    const contract =new ethers.Contract(
        contractAddress,
        abi,
        signer ||undefined);

        const vehicle_id = Number(_id)-1;
        const days = Number(_day);
        const pricePerDayNoFee = Number(vehicles[vehicle_id].priceRentPerDay);
        const newprice = (pricePerDayNoFee * days) + newRentFee;
        const lastprice = String(newprice);
        console.log(lastprice);
        
    const receipt=await contract.rentVehicle(_id, _day, {
        value: ethers.utils.parseEther(lastprice)});
    
}


   
       return(
    <div>
       {renderList}
             
        </div>   
        )
       
    

    
}

export default TruckList;