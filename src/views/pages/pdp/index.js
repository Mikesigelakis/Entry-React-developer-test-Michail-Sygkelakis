
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_product_details } from '../../../redux/actions/Product';
import Loading from '../../../components/loading';
import Product_Details from '../../../components/Product_Details';


class Pdb extends Component {



    componentDidMount() {
        const id = window.location.pathname.split('/')[2]
        this.props.get_product_details(id)
    }

    render() {
        if (this.props.product.loading === true) {

            return (
                <div>
                    <Loading />
                </div>)
        }
        if (this.props.product.message !== '') {
            return (
                <div>
                    <div>{this.props.product.message}</div>
                </div>)

        } else {
            return (
                // eslint-disable-next-line
                <Product_Details product={this.props.product.product} />
            );

        }
    }
}


const mapDispatchToProps = (dispatch) => ({
    get_product_details: (id) => dispatch(get_product_details(id))
})

const mapStateToProps = ({
    product,

}) => {
    return { product: product }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pdb);