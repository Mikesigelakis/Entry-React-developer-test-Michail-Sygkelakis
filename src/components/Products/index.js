import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../Product';
import './style.css'
 


class Products extends Component {

    getProductsComponent(){
        return this.props.products.products.products.map(item => {
            return (
                <Product product={item} key={item.id} />
            )
        })
    }

    render() {
            const productsComponent = this.getProductsComponent()
            return (
                <div>
                    <div className='container'>
                        {productsComponent}
                    </div>
                </div>
            );

        }
    }


const mapStateToProps = ({
    products,

}) => {
    return { products: products }
}

 
 


export default connect(mapStateToProps, null)(Products);