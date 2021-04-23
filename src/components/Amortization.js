
import React from 'react'

export default function Amortization(props) {
    return (
        <div>
            <h4>What is the longest amortization you can offer?</h4>
            <select
                value={props.selectedAmortization}
                onChange={e => props.setSelectedAmortization(e.target.value)}
            >
                <option value="">select amortization</option>
                <option value="">interest only</option>
                <option value="5">5 years</option>
                <option value="10">10 years</option>
                <option value="15">15 years</option>
                <option value="20">20 years</option>
                <option value="25">25 years</option>
                <option value="30">30 years</option>
                <option value="35">35 years</option>
                <option value="40">40 years</option>        
            </select>
        </div>
    )
}
