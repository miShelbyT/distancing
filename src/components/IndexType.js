import React from 'react'

function IndexType(props) {
  return (
    <div>
      <h4>Which index do you base your loans on? If you use multiple please select the most common one. </h4>
            <select
                value={props.selectedIndexType}
                onChange={e => props.setSelectedIndexType(e.target.value)}
            >
                <option value="">Select One Index Type</option>
                <option value="US 10 Year Treasury">US 10 Year Treasury</option>
                <option value="US 5 Year Treasury">US 5 Year Treasury</option>
                <option value="WSJ Prime">WSJ Prime</option>
                <option value="LIBOR (30 Day)">LIBOR (30 Day)</option>
                <option value="10 Year SWAP">10 Year SWAP</option>
                <option value="FHLB">FHLB</option>
                <option value="Base Rate">Base Rate</option>
            </select>
    </div>
  )
}

export default IndexType
