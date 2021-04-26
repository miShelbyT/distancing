
import React from 'react'
import MultiSelect from "react-multi-select-component";


export default function PrepaymentPenalty(props) {
    
    const options = [
            {value: "No prepayment penalty", label: "No prepayment penalty"},
            {value: "No prepayment penalty in the even of a sale", label: "No prepayment penalty in the even of a sale"},
            {value: "Stepdown prepayment penalty", label: "Stepdown prepayment penalty"},
            {value: "Yield Maintenance", label: "Yield Maintenance"},
            {value: "Defeasance", label: "Defeasance"}
    ]
    
    return (
        <div>
            <h4>Please select all prepayment penalty options that you can offer</h4>
            {/* <pre>{JSON.stringify(props.selected)}</pre> */}
            <MultiSelect
                options={options}
                value={props.selectedPrepaymentPenalty}
                onChange={props.setSelectedPrepaymentPenalty}
                labelledBy="Select"
            />

        </div>
    )
}