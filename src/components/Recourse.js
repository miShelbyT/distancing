
import React from 'react'

export default function Recourse(props) {
    return (
        <div>
            <label>Could your loans be structured without recourse / or partial recourse / burning recourse to any degree?</label>
            <select
                value={props.selectedRecourse}
                onChange={e => props.setSelectedRecourse(e.target.value)}
            >
                <option value="">select</option>
                <option value="true">YES</option>
                <option value="false">NO</option>
                
            </select>
        </div>
    )
}
