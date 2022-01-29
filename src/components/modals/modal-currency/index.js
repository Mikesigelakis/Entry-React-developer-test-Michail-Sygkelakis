import React, { Component } from 'react';
import './style.css'
import { connect } from 'react-redux';
import arrow_up from "../../../assets/svgs/arrow-up.svg"
import arrow_down from "../../../assets/svgs/arrow-down.svg"
import { change_currency } from '../../../redux/actions/Currencies';
import { Currencies } from '../../../assets/data/currencies';



class ModalCurrency extends Component {


    constructor() {
        super()
        this.state = {
            visibleModal: false
        }
    }

    openModal() {
        this.setState({ visibleModal: !this.state.visibleModal })
    }



    render() {

        const prices =
            Currencies.map((currency) => {
                return (
                    <div key={currency.symbol} className='currency-choice' onClick={() => {
                        this.setState({ visibleModal: false })
                        this.props.change_currency(currency.symbol)
                    }
                    }> {currency.symbol + ' ' + currency.label} </div>
                )
            })

        return (
            <div>
                <div className='modal-currency-button' onClick={() => this.openModal()}>
                    {this.props.currencies.symbol}
                    {this.state.visibleModal ? (
                        <img src={arrow_up} alt={'Arrow up'}></img>

                    ) : <img src={arrow_down} alt={'Arrow down'}></img>}
                </div>
                {this.state.visibleModal ? (
                    <div className=''>
                        <div className="modal-content">
                            {prices}
                        </div>
                    </div>
                ) : <div></div>}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies,
    }
}

const mapDispatchToProps = (dispatch) => ({
    change_currency: (id) => dispatch(change_currency(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalCurrency);