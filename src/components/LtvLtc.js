
import React from 'react'


export default function LtvLtc(props) {
    
    
    return (
        <div>
            <h4>What is your maximum LTV?</h4>
            <select
                value={props.selectedLTV}
                onChange={e => props.setSelectedLTV(e.target.value)}
            >
                <option value="">select LTV</option>
                <option value=".60">60%</option>
                <option value=".65">65%</option>
                <option value=".70">70%</option>
                <option value=".75">75%</option>
                <option value=".80">80%</option>
            
            </select>

            <h4>What is your maximum LTC?</h4>
            <select
                value={props.selectedLTC}
                onChange={e => props.setSelectedLTC(e.target.value)}
            >
                <option value="">select LTC</option>
                <option value=".65">65%</option>
                <option value=".70">70%</option>
                <option value=".75">75%</option>
                <option value=".80">80%</option>
                <option value=".85">85%</option>
                <option value=".90">90%</option>
                <option value=".95">95%</option>
                <option value=".100">100%</option>
            
            </select>

        </div>
    )
}