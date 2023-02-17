import React from 'react';
import { useState,useEffect } from 'react';
import { Route, Routes, Link} from "react-router-dom"
import AddVehicle from './pages/AddVehicle';
import AllVehicles from './pages/AllVehicles';
import Motorcycles from './pages/Motorcycles';
import Cars from './pages/Cars';
import Trucks from './pages/Trucks';
import YourVehicles from './pages/YourVehicles';
import "./App.css";
function App() {
  
  
  return (
    <div className="App">
      <img src="../images/the-logo.png" alt="logo" width={130} height={130} className="logo"/>
        <nav className="navigation">
      <Link to="/"className='menu-nav'>All Vehicles</Link>
      <Link to="/cars"className='menu-nav'>Cars</Link>
      <Link to="/motorcycles"className='menu-nav'>Motorcycles</Link>
      <Link to="/trucks"className='menu-nav'>Trucks</Link>
      <Link to="/add-vehicle"className="add-nav">Add Vehicle</Link>
      <Link to="/your-vehicles"className="menu-nav">Your Vehicles</Link>
      </nav>

      <Routes>
      <Route path="/" element={<AllVehicles/>}/>
      <Route path="/cars" element={<Cars/>}/>
      <Route path="/motorcycles" element={<Motorcycles/>}/>
      <Route path="/trucks" element={<Trucks/>}/>
      <Route path="/add-vehicle" element={<AddVehicle/>} />
      <Route path="/your-vehicles" element={<YourVehicles/>} />
    </Routes>
    <br></br>
    <br></br>
    <center><p className='evidence'>Oldtimers Dapp is fully decentralized, you can follow all activity on <a href="https://explorer-testnet.trust.one/address/0x0EB7dA9e8b7f85Bc801BaeB718BE0476B48Bb9Be">the smart contract</a></p></center>
    </div>
    
  );
}

export default App;
