
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
                <option value="0.5">$500 K</option>

                <option value="1">$1 MM</option>
                <option value="2">$2 MM</option>
                <option value="3">$3 MM</option>
                <option value="4">$4 MM</option>
                <option value="5">$5 MM</option>

                <option value="10">$10 MM</option>
                <option value="15">$15 MM</option>
                <option value="20">$20 MM</option>
                <option value="25">$25 MM</option>
                <option value="30">$30 MM</option>
                <option value="35">$35 MM</option>
                <option value="40">$40 MM</option>
                <option value="45">$45 MM</option>
                <option value="50">$50 MM</option>
                
            </select>

        </div>
    )
}