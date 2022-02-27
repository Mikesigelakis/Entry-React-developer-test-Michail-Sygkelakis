import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import arrow_up from "../../../assets/svgs/arrow-up.svg";
import arrow_down from "../../../assets/svgs/arrow-down.svg";
import { change_currency } from "../../../redux/actions/Currencies";

class ModalCurrency extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currencies: [],
    };
  }

  componentDidMount() {
    this.setState({ currencies: this.props.currencies });
  }

  handleClick = () => {
    if (!this.state.showModal) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) this.handleClick();
  };

  getCurrencies() {
    return this.state.currencies.map((currency) => {
      return (
        <div
          key={currency.symbol}
          className="currency-choice"
          onClick={() => {
            this.setState({ visibleModal: false });
            this.props.change_currency(currency.symbol);
          }}
        >
          {" "}
          {currency.symbol + " " + currency.label}{" "}
        </div>
      );
    });
  }

  getRightPositionArrow() {
    return this.state.showModal ? (
      <img className="arrow-image" src={arrow_up} alt={"Arrow up"}></img>
    ) : (
      <img className="arrow-image" src={arrow_down} alt={"Arrow down"}></img>
    );
  }

  showCurrencies(currencies) {
    return this.state.showModal ? (
      <div className="">
        <div className="modal-content">{currencies}</div>
      </div>
    ) : (
      <></>
    );
  }

  render() {
    const currencies = this.getCurrencies();
    const arrowPosition = this.getRightPositionArrow();
    const showCurrencies = this.showCurrencies(currencies);

    return (
      <div
        ref={(node) => {
          this.node = node;
        }}
      >
        <div
          className="modal-currency-button"
          onClick={() => this.handleClick()}
        >
          {this.props.currencies[0].symbol}
          {arrowPosition}
        </div>
        {showCurrencies}
      </div>
    );
  }
}

const mapStateToProps = ({ currencies }) => {
  return {
    currencies: currencies.currencies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  change_currency: (id) => dispatch(change_currency(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCurrency);
