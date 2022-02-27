import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../../../components/Products";
import "./style.css";
import { createBrowserHistory } from "history";
import { get_products } from "../../../redux/actions";
import Loading from "../../../components/loading";

class Category extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      const history = createBrowserHistory();
      const pathname = history.location.pathname.replace("/", "");
      {
        pathname === "/"
          ? this.props.get_products("all")
          : this.props.get_products(pathname);
      }
    }
  }

  componentDidMount() {
    const history = createBrowserHistory();
    const pathname = history.location.pathname.replace("/", "");
    {
      pathname === "/"
        ? this.props.get_products("all")
        : this.props.get_products(pathname);
    }
  }

  render() {
    if (this.props.products.loading === true) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    if (this.props.products.message !== "") {
      return (
        <div>
          <div>{this.props.products.message}</div>
        </div>
      );
    }
    return (
      <>
        <div className="category-title">{this.props.category}</div>
        <Products />
      </>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return { products: products };
};

const mapDispatchToProps = (dispatch) => ({
  get_products: (category) => dispatch(get_products(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
