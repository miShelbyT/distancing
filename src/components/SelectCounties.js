
import React from 'react'
import MultiSelect from "react-multi-select-component";
import scus from "state-counties-us";

export default function SelectCounties(props) {

    var zcta = require("us-zcta-counties");

    const allCounties =  
        props.selectedStates.map(state => {
                const stateObj = new Object()
                stateObj[state.value] = zcta.find({state: state.value})
                return stateObj
            }
        )
    

    const options = () => {
        const arr = []

        for (let i = 0; i < allCounties.length; i++){
            let abbrev = Object.keys(allCounties[i])[0]
            // console.log(abbrev)

            let stateCounties = Object.keys(allCounties[i][abbrev])
            
            for (let j = 0; j < stateCounties.length; j++){
                let countyObj = new Object()
                countyObj["value"] = `${stateCounties[j]}, ${abbrev}`
                countyObj["label"] = `${stateCounties[j]}, ${abbrev}`

                arr.push(countyObj)
            }

        }

        return arr
    }
    

    return (

        <div>
            <h1>Please select all counties that you lend in</h1>
            <MultiSelect
                options={options}
                value={props.selectedCounties}
                onChange={props.setSelectedCounties}
                labelledBy="Select"
            /> 
            
        </div>
    )
}
