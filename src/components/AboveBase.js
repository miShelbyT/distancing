
import React from 'react'

export default function AboveBase(props) {
    return (
        <div>
            <label>How much above your base rate do your interest rates range?</label>
        <select
            value={props.selectedAboveBase}
            onChange={e => props.setSelectedAboveBase(e.target.value)}
        >
            <option value="">select Above Base Range</option>
            <option value="">N/A</option>
            <option value=".010">1.0%</option>
            <option value=".015">1.5%</option>
            <option value=".020">2.0%</option>
            <option value=".025">2.5%</option>
            <option value=".030">3.0%</option>
            <option value=".035">3.5%</option>
            <option value=".040">4.0%</option>
            <option value=".045">4.5%</option>           
            <option value=".050">5.0%</option>
            <option value=".055">5.5%</option>           
            <option value=".060">6.0%</option>
            <option value=".065">6.5%</option>           
            <option value=".070">7.0%</option>                           
        </select> 
        </div>
    )
}
