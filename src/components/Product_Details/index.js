import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_product_in_cart } from '../../redux/actions/Cart';
import Price from '../../utils/Price';
import './style.css'

class Product_Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected_thumb: this.props.product.gallery[0],
            selected_product: this.props.product

        }
    }

    onChangeAttribute(attribute_id, item_id) {
        let temp_product = this.state.selected_product
        temp_product.attributes.forEach(attribute => {
            if (attribute.id === attribute_id) {
                attribute.items.forEach(item => {
                    if (item.id === item_id) {
                        item['selected'] = true
                    } else {
                        item['selected'] = false
                    }
                })
            }
        })


        this.setState({ selected_product: temp_product })
    }

    addinCart() {
        const product_for_cart = JSON.parse(JSON.stringify(this.state.selected_product))
        this.props.add_product_in_cart(product_for_cart)
    }

    render() {


        const full_price = Price(this.props.product.prices, 1, this.props.currency)

        const product_thumbs = this.props.product.gallery.map((thumb,index) => {
            return <img key={index} src={thumb} alt={thumb} className='product-thumb' onClick={() => { this.setState({ selected_thumb: thumb }) }}></img>
        })

        const product_attributes = this.state.selected_product.attributes.map((attribute,index) => {
            const attribute_items = attribute.items.map((item,index) => {
                const background_color = attribute.id === 'Color' ? item.value : ''
                const text = attribute.id === 'Color' ? '' : item.value
                return <div key={index} className={item.selected === true ? 'attribute-item attribute-item-selected' : 'attribute-item'}
                    style={{ backgroundColor: background_color }} onClick={() => this.onChangeAttribute(attribute.id, item.id)}>
                    {text}
                </div>
            })

            return (
                <div key={index} className='attribute-container'>
                    <div className='attribute-name'>{attribute.id}</div>
                    {attribute_items}
                </div>
            )
        })

        const add_to_cart = this.props.product.inStock === true ? <div className='cart-button' >Add in cart</div> : <div className='cart-button'>Out of stock</div>


        return (
            <div className='container-details'>
                <div className='small-pictures-container'>
                    {product_thumbs}
                </div>
                <div className='selected-picture-container'>
                    <img src={this.state.selected_thumb} alt={this.state.selected_thumb} className='selected-picture'></img>
                </div>
                <div className='product-details-container'>
                    <div className='product-details-brand'>{this.props.product.brand}</div>
                    <div className='product-details-name'>{this.props.product.name}</div>
                    <div className='attribute-container'>{product_attributes}</div>
                    <div className='attribute-price-title'>Price</div>
                    <div className='product-details-price'>{full_price}</div>
                    <div className='button-container' onClick={() => { if (this.props.product.inStock) { this.addinCart() } }}
                        style={{
                            backgroundColor: this.props.product.inStock ? '#5ECE7B' : 'rgb(153, 158, 158)',
                            cursor: this.props.product.inStock ? 'pointer' : ''
                        }}>
                        {add_to_cart}
                    </div>
                    <div className='description' dangerouslySetInnerHTML={{ __html: this.props.product.description }} >
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    add_product_in_cart: (product) => dispatch(add_product_in_cart(product))
})


const mapStateToProps = ({
    currencies

}) => {
    return { currency: currencies }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product_Details);