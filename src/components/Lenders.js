
import React, { Component } from 'react'
import Lender from './Lender'

export default class Lenders extends Component {
    render() {
        return (
            <div>
                {this.props.lenders.map((lender) => (
                    <Lender 
                        key={lender.id}
                        lender={lender}
                    />
                ))
                }
            </div>
        )
    }
}
