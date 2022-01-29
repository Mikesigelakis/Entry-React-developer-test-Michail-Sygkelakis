import { ADD_PRODUCT_IN_CART, REMOVE_PRODUCT_FROM_CART } from "../../constants/redux/Cart"




export const add_product_in_cart = (product) => {
    return {
        type: ADD_PRODUCT_IN_CART,
        payload: product
    }
}

export const remove_product_from_cart = (product) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: product
    }
}