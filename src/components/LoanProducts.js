
import React from 'react'
import MultiSelect from "react-multi-select-component";


export default function PropertyTypes(props) {
    
    const options = [
            {value: "5 year fixed rate", label: "5 year fixed rate"},
            {value: "7 year fixed rate", label: "7 year fixed rate"},
            {value: "10 year fixed rate", label: "10 year fixed rate"},
            {value: "15 year fixed rate", label: "15 year fixed rate"},
            {value: "1 year interest only", label: "1 year interest only"},
            {value: "2 year interest only", label: "2 year interest only"},
            {value: "SBA 7a", label: "SBA 7a"},
            {value: "SBA 504", label: "SBA 504"},
            {value: "USDA", label: "USDA"},
            {value: "Bridge", label: "Bridge"},
            {value: "Semi-Perm", label: "Semi-Perm"},
            {value: "Ground-up Construction", label: "Ground-up Construction"},
            {value: "Fix and Flip / Rehab / Renovation / Value-add / Light Construction", label: "Fix and Flip / Rehab / Renovation / Value-add / Light Construction"},
            {value: "Mezzanine", label: "Mezzanine"},
            {value: "Preferred Equity", label: "Preferred Equity"}
    ]
    
    return (
        <div>
            <h2>Please select all loan products that you offer</h2>
            {/* <pre>{JSON.stringify(props.selected)}</pre> */}
            <MultiSelect
                options={options}
                value={props.selectedLoanProducts}
                onChange={props.setSelectedLoanProducts}
                labelledBy="Select"
            />

        </div>
    )
}
