import React from 'react'

export default function BPS(props) {
    return (
        <div>
            <label>How many BPS is your most competitive spread based on the previously selected index?</label>
            <select
                value={props.selectedBPS}
                onChange={e => props.setSelectedBPS(e.target.value)}
            >
                <option value="">Select BPS</option>
                <option value="-100">-100 bps</option>
                <option value="-75">-75 bps</option>
                <option value="-50">-50 bps</option>
                <option value="-25">-25 bps</option>
                <option value="0">0 bps</option>
                <option value="5">5 bps</option>
                <option value="10">10 bps</option>
                <option value="15">15 bps</option>
                <option value="20">20 bps</option>
                <option value="25">25 bps</option>
                <option value="30">30 bps</option>
                <option value="35">35 bps</option>
                <option value="40">40 bps</option>
                <option value="45">45 bps</option>
                <option value="50">50 bps</option>
                <option value="55">55 bps</option>
                <option value="60">60 bps</option>
                <option value="65">65 bps</option>
                <option value="70">70 bps</option>
                <option value="75">75 bps</option>
                <option value="80">80 bps</option>
                <option value="85">85 bps</option>
                <option value="90">90 bps</option>
                <option value="95">95 bps</option>
                <option value="100">100 bps</option>
            </select>
        </div>
    )
}
