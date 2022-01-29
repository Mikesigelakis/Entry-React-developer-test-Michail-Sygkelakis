import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_products } from '../../redux/actions/Products';
import Loading from '../loading';
import Product from '../Product';
import './style.css'
import equal from 'fast-deep-equal'



class Products extends Component {

    componentDidMount() {
        this.props.get_products(this.props.category)
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.category, prevProps.category)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            this.props.get_products(this.props.category)
        }
    }


    render() {
        if (this.props.products.loading === true) {

            return (
                <div>
                    <div className='category-title'>{this.props.category}</div>
                    <Loading />
                </div>)
        }
        if (this.props.products.message !== '') {
            return (
                <div>
                    <div className='category-title'>{this.props.category}</div>
                    <div>{this.props.products.message}</div>
                </div>)

        } else {
            const productsComponent = this.props.products.products.products.map(item => {
                return (
                    <Product product={item} key={item.id} />
                )
            })
            return (
                <div>
                    <div className='category-title'>{this.props.category}</div>
                    <div className='container'>
                        {productsComponent}
                    </div>
                </div>
            );

        }
    }
}

const mapStateToProps = ({
    products,

}) => {
    return { products: products }
}

const mapDispatchToProps = (dispatch) => ({
    get_products: (category) => dispatch(get_products(category))
})


export default connect(mapStateToProps, mapDispatchToProps)(Products);