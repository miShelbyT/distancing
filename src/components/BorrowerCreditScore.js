
import React from 'react'
import MultiSelect from "react-multi-select-component";


export default function BorrowerCreditScore(props) {
     
    return (
        <div>
            <h4>Please select the lowest acceptable FICO Score that would make a borrower eligible for your loan</h4>
            <select
                value={props.selectedBorrowerCreditScore}
                onChange={e => props.setSelectedBorrowerCreditScore(e.target.value)}
            >
                <option value="">select lowest</option>
                <option value="580">580</option>
                <option value="600">600</option>
                <option value="620">620</option>
                <option value="640">640</option>
                <option value="660">660</option>
                <option value="680">680</option>
                <option value="700">700</option>
                <option value="720">720</option>
                <option value="740">740</option>

            </select>

        </div>
    )
}