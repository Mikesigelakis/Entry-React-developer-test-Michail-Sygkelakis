import { Currencies } from "../../assets/data/currencies";
import { CHANGE_CURRENCY } from "../../constants/redux/Currencies";


const initState = {
    symbol: '$',
    label: 'USD',
}


const currencies = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY:
            const new_currency = Currencies.filter(currency => currency.symbol === action.payload)
            state = new_currency[0]
            return Object.assign({}, state)
        default: return state;
    }
}

export default currencies;