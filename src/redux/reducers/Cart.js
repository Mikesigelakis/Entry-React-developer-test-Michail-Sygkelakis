import { TotalPrices } from "../../assets/data/total_prices";
import { ADD_PRODUCT_IN_CART, REMOVE_PRODUCT_FROM_CART } from "../../constants/redux/Cart";


const initState = {
    products: [],
    totalPrices: TotalPrices
}


const basket = (state = initState, action) => {
    let product_Exists
    switch (action.type) {
        case ADD_PRODUCT_IN_CART:
            state.totalPrices.forEach((element, index) => {
                action.payload.prices.forEach(item => {
                    if (element.currency.symbol === item.currency.symbol)
                        state.totalPrices[index].amount = state.totalPrices[index].amount + item.amount
                })

            });
            product_Exists = state.products.findIndex((product) => JSON.stringify(product.details) === JSON.stringify(action.payload))
            if (product_Exists > -1) {
                state.products[product_Exists].count += 1
            } else {
                const new_product = {
                    details: action.payload,
                    count: 1,

                }
                state.products.push(new_product)
            }
            return Object.assign({}, state)
        case REMOVE_PRODUCT_FROM_CART:
            state.totalPrices.forEach((element, index) => {
                action.payload.prices.forEach(item => {
                    if (element.currency.symbol === item.currency.symbol)
                        state.totalPrices[index].amount = state.totalPrices[index].amount - item.amount
                })
            });
            product_Exists = state.products.findIndex((product) => JSON.stringify(product.details) === JSON.stringify(action.payload))
            state.products[product_Exists].count -= 1;
            if (state.products[product_Exists].count === 0) {
                state.products.splice(product_Exists, 1)
            }
            return Object.assign({}, state)
        default: return state

    }
}

export default basket
