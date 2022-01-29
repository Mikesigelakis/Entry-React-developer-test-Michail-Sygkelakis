import React, { Component } from 'react'
import Products from '../../../components/Products'

export class Category extends Component {
    render() {
        return <>
            <h2>
                <Products category={this.props.category} />
            </h2>
        </>
    }
}