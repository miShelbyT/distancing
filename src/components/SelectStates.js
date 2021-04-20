
import React from 'react'
import MultiSelect from "react-multi-select-component";

export default function SelectStates(props) {
    
    const options = [
            {value: "AL", label: "Alabama"},
            {value: "AK", label: "Alaska"},
            {value: "AZ", label: "Arizona"}
    ]
    
    return (
        <div>
            <h1>Select States</h1>
            {/* <pre>{JSON.stringify(props.selected)}</pre> */}
            <MultiSelect
                options={options}
                value={props.selectedStates}
                onChange={props.setSelectedStates}
                labelledBy="Select"
            />

        </div>
    )
}
