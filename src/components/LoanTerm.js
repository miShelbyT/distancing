
import React from 'react'

export default function LoanTerm(props) {
    return (
        <div>
            <label>What is the longest term you can provide?</label>
            <select
                value={props.selectedLoanTerm}
                onChange={e => props.setSelectedLoanTerm(e.target.value)}
            >
                <option value="">select Loan Term</option>
                <option value="0.5">6 Months</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="5">5 years</option>
                <option value="7">7 years</option>
                <option value="10">10 years</option>
                <option value="15">15 years</option>
                <option value="20">20 years</option>
                <option value="25">25 years</option>
                <option value="30">30 years</option>
                <option value="40">40 years</option>                
            </select>
        </div>
    )
}
