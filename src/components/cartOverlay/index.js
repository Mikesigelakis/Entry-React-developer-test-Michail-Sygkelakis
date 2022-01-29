import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_product_in_cart, remove_product_from_cart } from '../../redux/actions/Cart';
import Price from '../../utils/Price';
import './style.css'



class CartOverlay extends Component {
    render() {



        const products = this.props.cart.products.map((item,index) => {
            const product_attributes = item.details.attributes.map((attribute,index) => {
                const attribute_items = attribute.items.map((item,index) => {
                    const background_color = attribute.id === 'Color' ? item.value : ''
                    const text = attribute.id === 'Color' ? '' : item.value
                    return <div key={index} className={item.selected === true ? 'basket_attribute_item attribute_item_selected' : 'basket_attribute_item'}
                        style={{ backgroundColor: background_color }}>
                        {text}
                    </div>
                })

                return (
                    <div key={index} className='attribute-container'>
                        <div className='basket_attribute_name'>{attribute.id} : {attribute_items}</div>

                    </div>
                )
            })
            const price_product = Price(item.details.prices, item.count, this.props.currency)

            return (
                <div key={index} className='product_detals_container_overlay'>
                    <div>
                        <div className='product_brand'>{item.details.brand}</div>
                        <div className='product_name'>{item.details.name}</div>
                        <div className='product_price'>
                            {price_product}
                        </div>
                        <div>{product_attributes}</div>
                    </div>
                    <div className='count_container_overlay'>
                        <div className='item_plus' onClick={() => this.props.add_product_in_cart(item.details)}>+</div>
                        <div className="item_count">{item.count}</div>
                        <div className='item_minus' onClick={() => this.props.remove_product_from_cart(item.details)}>-</div>
                    </div>
                    <div>
                        <img src={item.details.gallery[0]} style={{ width: 200, height: 200 }} className='item' alt={item.details.gallery[0]}></img>
                    </div>
                </div>
            )
        })


        return (
            <div className='container_cart_overlay'>
                {this.props.cart.products.length === 0 ? <div className='empty_basket'>Basket is empty...</div> : products}

            </div>
        );
    }
}

const mapStateToProps = ({ cart, currencies }) => {
    return {
        cart: cart,
        currency: currencies
    }
}

const mapDispatchToProps = (dispatch) => ({
    add_product_in_cart: (product) => dispatch(add_product_in_cart(product)),
    remove_product_from_cart: (product) => dispatch(remove_product_from_cart(product)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);         