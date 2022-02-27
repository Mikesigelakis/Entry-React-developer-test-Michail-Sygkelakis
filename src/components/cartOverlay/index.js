import React, { Component } from "react";
import ProductsCartOverlay from "../ProductsCartOverlay";

import "./style.css";

class CartOverlay extends Component {


  render() {
 
    return (
      <div className="container_cart_overlay">
            <ProductsCartOverlay/>
      </div>
    );
  }
}


export default CartOverlay;
