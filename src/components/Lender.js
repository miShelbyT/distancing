
import React, { Component } from 'react'

export default class Lender extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.lender.name}</h2>
            </div>
        )
    }
}
