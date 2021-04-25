
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
            <h1>Please select all states in which you lend</h1>
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
