
import React from 'react'


export default function SelectRadius(props) {
    
    
    return (
        <div>
            <h4>Within how many miles must the property be from your nearest branch?</h4>
            <select
                value={props.selectedRadius}
                onChange={e => props.setSelectedRadius(e.target.value)}
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
