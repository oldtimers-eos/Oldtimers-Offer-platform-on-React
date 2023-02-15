import React from 'react';

export const FormDetails = ({ onSubmit }) => {
  
  return (
    
    <form onSubmit={onSubmit}>
      <div className="form-group-2">
        <label htmlFor="name">Exterior Color</label>
        <input className="form-control-2" id="exteriorColor" />
      </div>
      <div className="form-group-2">
        <label htmlFor="name">Interior Color </label>
        <input className="form-control-2" id="interiorColor" />
      </div>
      <div className="form-group-2">
        <label htmlFor="name">Transmission</label>
        <input className="form-control-2" id="transmission" />
      </div>
      <div className="form-group-2">
        <label htmlFor="name">Odometer</label>
        <input type="number" className="form-control-2" id="odometer" />
      </div>
      {/* <div className="form-group-2">
        <label htmlFor="name">Rent Available</label>
        <input className="form-control-2" id="rentAvailable" />
      </div> */}
      <div className="form-group-2">
             <label >Rent Available</label>
              <div><input type="radio" value="true" id="rentAvailable" name="rentAvailable"/> Yes</div>
             <div><input type="radio" value="false" id="rentAvailable" name="rentAvailable" checked/> No</div>
      </div>
      <div className="form-group-2">
        <label htmlFor="name">Price for Rent (Daily)</label>
        <input type="number" className="form-control-2" id="priceRentPerDay" />
      </div>
      {/* <div className="form-group-2">
        <label htmlFor="name">Buy Available </label>
        <input className="form-control-2" id="buyAvailable" />
      </div> */}
      <div className="form-group-2">
             <label >Buy Available</label> 
             <div><input type="radio" id="buyAvailable" value="true" name="buyAvailable" /> Yes</div>
             <div><input type="radio" id="buyAvailable" value="false" name="buyAvailable" checked/> No</div>
      </div>
      <div className="form-group-2">
        <label htmlFor="name">Price for the Vehicle </label>
        <input type="number" className="form-control-2" id="priceForVehicle" />
      </div>
      <div className="form-group-2">
        <button className="form-control btn btn-primary" type="submit">
          Submit Details
        </button>
      </div>
    </form>
  );
};
export default FormDetails;
