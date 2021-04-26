
import React from 'react'
import MultiSelect from "react-multi-select-component";


export default function BorrowerEligibility(props) {
    
    const options = [
            {value: "Can only lend to local borrowers from market / trade area", label: "Can only lend to local borrowers from market / trade area"},
            {value: "Can lend to out of footprint borrowers", label: "Can lend to out of footprint borrowers"},
            {value: "Can lend to out of state borrowers", label: "Can lend to out of state borrowers"},
            {value: "Can lend to foreign borrowers", label: "Can lend to foreign borrowers"},
            {value: "Can lend to funds / entities / trusts", label: "Can lend to funds / entities / trusts"},
            {value: "Borrower or relative must live, work, study, or worship in local footprint / market / trade area / community", label: "Borrower or relative must live, work, study, or worship in local footprint / market / trade area / community"}  
    ]
    
    return (
        <div>
            <h4>Please select all options that pertain to your borrower eligibility requirements</h4>
            {/* <pre>{JSON.stringify(props.selected)}</pre> */}
            <MultiSelect
                options={options}
                value={props.selectedBorrowerEligibility}
                onChange={props.setSelectedBorrowerEligibility}
                labelledBy="Select"
            />

        </div>
    )
}