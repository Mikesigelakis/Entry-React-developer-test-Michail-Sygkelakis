import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Headnav from "../../components/headnav";
import { get_currencies } from "../../redux/actions/Currencies";
import { connect } from "react-redux";
import Loading from "../../components/loading";
import { get_categories } from "../../redux/actions";
import Routers from "../Routers";

class Pages extends Component {
  componentDidMount() {
    this.props.get_currencies();
    this.props.get_categories();
  }

  render() {
    if (this.props.currencies.loading || this.props.categories.loading) {
      return <Loading />;
    }
    if (this.props.currencies.message) {
      return <div>{this.props.currencies.message}</div>;
    }
    if (this.props.categories.message) {
      return <div>{this.props.categories.message}</div>;
    }
    return (
      <>
        <Headnav />
        <Switch>
          <Routers />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ currencies, categories }) => {
  return {
    currencies: currencies,
    categories: categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  get_currencies: () => dispatch(get_currencies()),
  get_categories: () => dispatch(get_categories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
