
import React from 'react'
import MultiSelect from "react-multi-select-component";


export default function PropertyTypes(props) {
    
    const options = [
            {value: "", label: ""},
            {value: "", label: ""},

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
