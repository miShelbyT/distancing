
import React from 'react'


export default function MaxLoanAmt(props) {
    
    
    return (
        <div>
            <h4>What is your maximum loan amount?</h4>
            <select
                value={props.selectedMaxLoan}
                onChange={e => props.setSelectedMaxLoan(e.target.value)}
            >
                <option value="">select maximum</option>
                <option value="1">$1 MM</option>
                <option value="2">$2 MM</option>
                <option value="3">$3 MM</option>
                <option value="4">$4 MM</option>
                <option value="5">$5 MM</option>
            
            </select>

        </div>
    )
}