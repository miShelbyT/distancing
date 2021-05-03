
import React from 'react'


export default function SelectRadius(props) {
    
    
    return (
        <div>
            <label>Within how many miles must the property be from your nearest branch?</label>
            <select
                value={props.selectedRadius}
                onChange={e => props.setSelectedRadius(e.target.value)}
            >
                <option value="">select radius</option>
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="20">20 miles</option>
                <option value="25">25 miles</option>
                <option value="30">30 miles</option>
                <option value="35">35 miles</option>
                <option value="40">40 miles</option>
                <option value="45">45 miles</option>
                <option value="50">50 miles</option>
                <option value="55">55 miles</option>
                <option value="60">60 miles</option>
                <option value="65">65 miles</option>
                <option value="70">70 miles</option>
                <option value="75">75 miles</option>
                <option value="80">80 miles</option>
                <option value="85">85 miles</option>
                <option value="90">90 miles</option>
                <option value="95">95 miles</option>
                <option value="100">100 miles</option>
            </select>

        </div>
    )
}
