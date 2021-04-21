
import React, {useState} from 'react'

import SelectStates from "./SelectStates"
import SelectCounties from "./SelectCounties"
import SelectCities from "./SelectCities"
import SelectRadius from "./SelectRadius"

export default function NewLenderForm() {

    
    const [bank, setBank] = useState("")
    const [nameClicked, setNameClicked] = useState(false)

    const [selectedStates, setSelectedStates] = useState([]);
    const [statesClicked, setStatesClicked] = useState(false)

    const [selectedCounties, setSelectedCounties] = useState([])
    const [countiesClicked, setCountiesClicked] = useState(false)
    
    const [selectedRadius, setSelectedRadius] = useState(0)
    const [radiusClicked, setRadiusClicked] = useState(false)

    const stateArr = selectedStates.map(ele => ele.value)
    const countyArr = selectedCounties.map(ele => ele.value)
    const lenderRadius = parseInt(selectedRadius.value)

    const renderStatesSubmit = () => {
        setNameClicked(true)
    }
    const renderCounties = () => {
        setStatesClicked(true)
    }
    const renderRadius = () => {
        setCountiesClicked(true)
    }


    const submitHandler = (e) => {
        e.preventDefault()

        console.log(stateArr)
        fetch('http://localhost:3000/lenders', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: bank,
                    provinces: stateArr,
                    counties: countyArr,
                    radius: lenderRadius
                })
            })
            .then(response => {
                return response.json()
            })
            .then(console.log)

    }

    return (
        <div>
            <form onSubmit={submitHandler}>

                <label>
                    Bank Name:
                </label>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="ie Chase, National"
                    value={bank}
                    onChange={e => setBank(e.target.value)}
                />
                <button type="button" onClick={renderStatesSubmit}>View States</button>

                {nameClicked ?
                    <>
                        <SelectStates 
                            selectedStates={selectedStates} 
                            setSelectedStates={setSelectedStates}
                        />
                        <button type="button" onClick={renderCounties}>View Counties</button>
                    </>
                    : null
                }
                
                {statesClicked ?
                    <>
                    <SelectCounties 
                        selectedStates={selectedStates} 
                        selectedCounties={selectedCounties}
                        setSelectedCounties={setSelectedCounties}
                    />
                    <h4>OR</h4>
                    <SelectCities 
                        // selectedStates={selectedStates} 
                        // selectedCounties={selectedCounties}
                        // setSelectedCounties={setSelectedCounties}
                    />
                    <button type="button" onClick={renderRadius}>View Radius</button>
                    </>
                    : null
                }
                {countiesClicked ?
                    <>
                        <SelectRadius 
                            selectedRadius={selectedRadius} 
                            setSelectedRadius={setSelectedRadius}
                        />
                        <button type="button">Next</button>
                    </>
                    : null
                }



                <br/>
                <button type="submit">Outer Submit</button>
            </form>
        </div>
    )
}
