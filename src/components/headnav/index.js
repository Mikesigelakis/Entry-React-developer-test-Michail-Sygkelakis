import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import brand from "../../assets/svgs/brand.svg";
import ModalCurrency from "../modals/modal-currency";
import ModalBasket from "../modals/modal-basket";
import { connect } from "react-redux";

class Headnav extends Component {
  getFetchedCategories() {
    return this.props.categories.map((item) => {
      return (
        <NavLink
          key={item.name}
          className={(isActive) =>
            "navigation-item" + (!isActive ? " " : "-selected")
          }
          to={"/" + item.name}
          style={{ textDecoration: "none" }}
        >
          <div>{item.name}</div>
        </NavLink>
      );
    });
  }

  render() {
    const fetchednavLinks = this.getFetchedCategories();

    return (
     
        <div className="header">
          <div className="navigation">{fetchednavLinks}</div>
          <div className="brand-icon">
            <NavLink to="/cart">
              <img src={brand} alt="brand-icon" />
            </NavLink>
          </div>
          <div className="modals">
            <div className="modal-currency">
              <ModalCurrency />
            </div>
            <div className="modal-basket">
              <ModalBasket />
            </div>
          </div>
        </div>

    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
  };
};

export default connect(mapStateToProps, null)(Headnav);
