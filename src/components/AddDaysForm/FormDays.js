import React from 'react';

export const FormDays = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>

              <div className="form-group-2">
                <label >How many days ?</label>
                <select className="form-control-2"  id="days">
                <option value="1">1 Day</option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
                <option value="5">5 Days</option>
                </select>
             </div>
      
      <div className="form-group-2">
        <button className="form-control btn btn-primary" type="submit">
          Rent
        </button>
      </div>
    </form>
  );
};
export default FormDays;
