
import React, { Component } from 'react'
import Lenders from './Lenders'
import NewLenderForm from './NewLenderForm'
import Submitted from './Submitted'


export default class MainContainer extends Component {
    
    state = {
        lenders: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/lenders')
        .then(response => {
            return response.json()
        })
        .then(arr => {
            this.setState({
                lenders: arr
            })
        })

    }
    
    render() {
        // console.log(this.state)
        return (
            <div>
                
                <NewLenderForm />
                {/* <Lenders lenders={this.state.lenders} /> */}
            </div>
        )
    }
}
