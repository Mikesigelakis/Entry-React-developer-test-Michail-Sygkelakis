import { CHANGE_CURRENCY } from "../../constants/redux/Currencies.js"

 


export const change_currency = (symbol) => {
    return {
        type: CHANGE_CURRENCY,
        payload: symbol
    }
}