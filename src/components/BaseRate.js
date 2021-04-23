import React from 'react';

export default function BaseRate(props) {
  return (
    <div>
      <h4>What is your base interest rate (bottom of your interest rate range)?</h4>
        <select
            value={props.selectedBaseRate}
            onChange={e => props.setSelectedBaseRate(e.target.value)}
        >
            <option value="">select Base Rate</option>
            <option value="">N/A</option>
            <option value=".040">4.0%</option>
            <option value=".045">4.5%</option>
            <option value=".050">5.0%</option>
            <option value=".055">5.5%</option>
            <option value=".060">6.0%</option>
            <option value=".065">6.5%</option>
            <option value=".070">7.0%</option>
            <option value=".075">7.5%</option>           
            <option value=".080">8.0%</option>
            <option value=".085">8.5%</option>           
            <option value=".090">9.0%</option>
            <option value=".095">9.5%</option>           
            <option value=".100">10.0%</option>
            <option value=".105">10.5%</option>           
            <option value=".110">11.0%</option>
            <option value=".115">11.5%</option>           
            <option value=".120">12.0%</option>          
                        
        </select>  
    </div>
  )
}
