
import React from 'react'


export default function GeoParameter({selectedGeoParameter, setSelectedGeoParameter}) {
    
    
    return (
        <div>
            <label>Which of the following applies to your geographic parameters?</label>
            <select
                value={selectedGeoParameter}
                onChange={e => setSelectedGeoParameter(e.target.value)}
            >
                <option value="">select</option>
                <option value="state">Lend throughout entire state</option>
                <option value="counties">Lend in specific counties</option>
                <option value="radius">Lend based on radius from nearest branch</option>
                <option value="cities">Lend in specific cities</option>
            </select>

        </div>
    )
}