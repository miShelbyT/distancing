
import React, {useState} from 'react'
import MultiSelect from "react-multi-select-component";


export default function NewLenderForm() {

    const options = [
            {value: "AL", label: "Alabama"},
            {value: "AK", label: "Alaska"},
            {value: "AS", label: "American Samoa"},
            {value: "AZ", label: "Arizona"}
    ]

    const [selected, setSelected] = useState([]);
    const [bank, setBank] = useState("")

    const stateArr = selected.map(ele => ele.value)


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
                <h1>Select States</h1>
                <pre>{JSON.stringify(selected)}</pre>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
