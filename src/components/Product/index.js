import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css'
import Price from '../../utils/Price';


class Product extends Component {

    
    render() {

        // const selected_currency = this.props.currency
        // const price = this.props.product.prices.filter(item =>
        //     item.currency.symbol === selected_currency.symbol
        // )
        const full_price = Price(this.props.product.prices , 1 , this.props.currency)
        

        return (
            <div className={(this.props.product.inStock ? "product-in" : "product-out")}>
                <div className={(this.props.product.inStock ? "product-in-stock" : "product-out-of-stock")}>OUT OF STOCK</div>
                <NavLink to={'pdp/' + this.props.product.id} style={{ textDecoration: 'none' }}>
                    <img src={this.props.product.gallery[0]} alt={this.props.product.gallery[0]} className='product-image'></img>
                </NavLink>

                <div className='title'>{this.props.product.name} </div>
                <div className='price'>{full_price} </div>
            </div>
        );
    }
}

const mapStateToProps = ({
    currencies,

}) => {
    return { currency: currencies }
}


export default connect(mapStateToProps, null)(Product);