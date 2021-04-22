
import React from 'react'


export default function MinLoanAmt(props) {
    
    
    return (
        <div>
            <h4>What is your minimum loan amount?</h4>
            <select
                value={props.selectedMinLoan}
                onChange={e => props.setSelectedMinLoan(e.target.value)}
            >
                <option value="">select minimum</option>
                <option value="1">$1 MM</option>
                <option value="2">$2 MM</option>
                <option value="3">$3 MM</option>
                <option value="4">$4 MM</option>
                <option value="5">$5 MM</option>
            
            </select>

        </div>
    )
}