import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import empty_cart from "../../../assets/svgs/empty-cart.svg"
import { add_product_in_cart, remove_product_from_cart } from '../../../redux/actions/Cart';
import Price from '../../../utils/Price';
import './style.css'


class ModalBasket extends Component {


    constructor() {
        super()
        this.state = {
            visibleModal: false
        }
    }

    openModal() {
        this.setState({ visibleModal: !this.state.visibleModal })
    }


    render() {

        const total_price = Price(this.props.cart.totalPrices, 1, this.props.currency)

        let count = 0
        this.props.cart.products.forEach(product => {
            count = count + product.count
        });

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
                    <div  key ={index}className='attribute-container'>
                        <div className='basket_attribute_name'>{attribute.id} : {attribute_items}</div>

                    </div>
                )
            })
            const product_price = Price(item.details.prices, item.count, this.props.currency)

            return (
                <div key={index} className='product_detals_container'>
                    <div>
                        <div className='product_brand'>{item.details.brand}</div>
                        <div className='product_name'>{item.details.name}</div>
                        <div className='product_price'>{product_price}                        </div>
                        <div>{product_attributes}</div>
                    </div>
                    <div className='count_container'>
                        <div className='item_plus' onClick={() => this.props.add_product_in_cart(item.details)}>+</div>
                        <div className="item_count">{item.count}</div>
                        <div className='item_minus' onClick={() => this.props.remove_product_from_cart(item.details)}>-</div>
                    </div>
                    <div>
                        <img src={item.details.gallery[0]} style={{ width: 100, height: 100 }} className='item' alt={item.details.gallery[0]}></img>
                    </div>
                </div>
            )
        })


        return (
            <div>
                <div className='modal-basket-button' onClick={() => this.openModal()} >
                    <img src={empty_cart} alt={'Basket'} style={{ "width": 23 }}></img>
                    <div className='circle'> {count}</div>
                </div>

                <div className='modalBasket' style={{ "display": this.state.visibleModal ? 'inline' : 'none' }}>
                    <div className='modalContent'>
                        <div className='bagTitle'><span style={{ fontWeight: "bold" }}>My Bag,</span>   {count} items</div>
                        {count === 0 ? <div className='empty_basket'>Basket is empty...</div> : products}
                        <div className='total_price_container'>
                            <div className='total_price_title' >Total:</div>
                            <div className='total_price'>
                                {total_price}
                            </div>
                        </div>
                        <div className='buttons_container'>
                            <NavLink to="/cart" >
                                <div className='view_bag_button' onClick={()=>   this.setState({ visibleModal: false})}>
                                    VIEW BAG
                                </div>
                            </NavLink>
                            <div className='checkout_button'>
                                CHECKOUT
                            </div>
                        </div>

                    </div>
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(ModalBasket);         