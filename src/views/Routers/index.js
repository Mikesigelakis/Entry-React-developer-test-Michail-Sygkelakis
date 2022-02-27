import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Category  from "../pages/category";
import Pdp from "../pages/pdp";
import Cart from "../pages/cart";

class Routers extends Component {
  getFetchedRouters() {
    const fetchedRouters = this.props.categories.map((category) => {
      return (
        <Route
          path={"/" + category.name}
          render={() => <Category category={category.name} />}
        />
      );
    });

    return fetchedRouters;
  }

  render() {
    const fetchedRouters = this.getFetchedRouters();

    return (
      <Switch>
        {fetchedRouters}
        <Route path={`/pdp/:id`} render={() => <Pdp />} />
        <Route path={`/cart`} render={() => <Cart />} />
        <Redirect from={`/`} to={`/all`} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
  };
};

export default connect(mapStateToProps, null)(Routers);
