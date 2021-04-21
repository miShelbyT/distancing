
import React from 'react'


export default function SelectRadius(props) {
    
    
    return (
        <div>
            <h2>Select Radius</h2>
            <select
                // options={options}
                value={props.selectedRadius}
                onChange={props.setSelectedRadius}
            >
                <option value="">select radius</option>
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="20">20 miles</option>
                <option value="25">25 miles</option>
            </select>

        </div>
    )
}
