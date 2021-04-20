
import React, {useState} from 'react'

import SelectStates from "./SelectStates"
import SelectCounties from "./SelectCounties"

export default function NewLenderForm() {

    
    const [bank, setBank] = useState("")
    const [nameClicked, setNameClicked] = useState(false)

    const [selectedStates, setSelectedStates] = useState([]);
    const [statesClicked, setStatesClicked] = useState(false)

    const [selectedCounties, setSelectedCounties] = useState([])
    const [countiesClicked, setCountiesClicked] = useState(false)

    const stateArr = selectedStates.map(ele => ele.value)

    const renderStatesSubmit = () => {
        setNameClicked(true)
    }
    const renderCounties = () => {
        setStatesClicked(true)
    }


    const submitHandler = (e) => {
        e.preventDefault()

        console.log(stateArr)
        fetch('http://localhost:3000/lenders', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: bank,
                    provinces: stateArr
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
                <button type="button" onClick={renderStatesSubmit}>Submit Name</button>

                {nameClicked ?
                    <>
                        <SelectStates selectedStates={selectedStates} setSelectedStates={setSelectedStates}/>
                        <button type="button" onClick={renderCounties}>Submit States</button>
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
                    <button type="button">Submit Counties</button>
                    </>
                    : null
                }


                <br/>
                <button type="submit">Outer Submit</button>
            </form>
        </div>
    )
}
