import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./style.css";
import Price from "../../utils/Price";
import direct_cart from "../../assets/svgs/direct-cart.svg";
import { add_product_in_cart } from "../../redux/actions/Cart";

class Product extends Component {
  render() {
    const full_price = Price(this.props.product.prices, 1, this.props.currency);
    const product_in_stock = this.props.product.inStock;



    return (
      <div className={product_in_stock ? "product-in" : "product-out"}>
        <div
          className={
            product_in_stock ? "product-in-stock" : "product-out-of-stock"
          }
        >
          OUT OF STOCK
        </div>
        <NavLink
          className="navlink-no-decoration"
          to={"pdp/" + this.props.product.id}
         >
          <img
            src={this.props.product.gallery[0]}
            alt={this.props.product.gallery[0]}
            className="product-image" 
          ></img>
        </NavLink>
 
        <div className="title">
          {this.props.product.brand + " " + this.props.product.name}{" "}
        </div>
        <div className="price">{full_price} </div>
        {product_in_stock && this.props.product.attributes.length === 0 ? (
          <div
            className="direct-buy"
            onClick={() => this.props.add_product_in_cart(this.props.product)}
          >
            <img src={direct_cart} alt ={direct_cart}></img>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ currencies }) => {
  return { currency: currencies.currencies[0] };
};

const mapDispatchToProps = (dispatch) => ({
  add_product_in_cart: (product) => dispatch(add_product_in_cart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
