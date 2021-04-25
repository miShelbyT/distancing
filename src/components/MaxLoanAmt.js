
import React from 'react'


export default function MaxLoanAmt(props) {
    
    
    return (
        <div>
            <h4>What is your maximum loan amount?</h4>
            <select
                value={props.selectedMaxLoan}
                onChange={e => props.setSelectedMaxLoan(e.target.value)}
            >
                <option value="">select maximum</option>
                <option value="1">$1 MM</option>
                <option value="2">$2 MM</option>
                <option value="3">$3 MM</option>
                <option value="4">$4 MM</option>
                <option value="5">$5 MM</option>
                <option value="6">$6 MM</option>
                <option value="7">$7 MM</option>
                <option value="8">$8 MM</option>
                <option value="9">$9 MM</option>
                <option value="10">$10 MM</option>
                <option value="11">$11 MM</option>
                <option value="12">$12 MM</option>
                <option value="13">$13 MM</option>
                <option value="14">$14 MM</option>
                <option value="15">$15 MM</option>
                <option value="16">$16 MM</option>
                <option value="17">$17 MM</option>
                <option value="18">$18 MM</option>
                <option value="19">$19 MM</option>
                <option value="20">$20 MM</option>
                <option value="21">$21 MM</option>
                <option value="22">$22 MM</option>
                <option value="23">$23 MM</option>
                <option value="24">$24 MM</option>
                <option value="25">$25 MM</option>
                <option value="26">$26 MM</option>
                <option value="27">$27 MM</option>
                <option value="28">$28 MM</option>
                <option value="29">$29 MM</option>
                <option value="30">$30 MM</option>

                <option value="35">$35 MM</option>
                <option value="40">$40 MM</option>
                <option value="45">$45 MM</option>
                <option value="50">$50 MM</option>
                
                <option value="100">$100 MM</option>
                <option value="150">$150 MM</option>
                <option value="200">$200 MM</option>
                <option value="250">$250 MM</option>
                <option value="300">$300 MM</option>
                <option value="350">$350 MM</option>
                <option value="400">$400 MM</option>
                <option value="450">$450 MM</option>
                <option value="500">$500 MM</option>
            </select>

        </div>
    )
}