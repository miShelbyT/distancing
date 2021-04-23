
import React from 'react'

export default function LoanTerm(props) {
    return (
        <div>
            <h4>What is the longest term you can provide?</h4>
            <select
                value={props.selectedLoanTerm}
                onChange={e => props.setSelectedLoanTerm(e.target.value)}
            >
                <option value="">select Loan Term</option>
                <option value="0.5">6 Months</option>
                <option value="1.0">1 year</option>
                <option value="2.0">2 years</option>
                <option value="3.0">3 years</option>
                <option value="5.0">5 years</option>
                <option value="7.0">7 years</option>
                <option value="10.0">10 years</option>
                <option value="15.0">15 years</option>
                <option value="20.0">20 years</option>
                <option value="25.0">25 years</option>
                <option value="30.0">30 years</option>
                <option value="40.0">40 years</option>                
            </select>
        </div>
    )
}
