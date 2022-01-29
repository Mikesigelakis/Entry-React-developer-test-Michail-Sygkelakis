import { GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "../../constants/redux/Products"

export const get_products = (category) => {
    return {
        type: GET_PRODUCTS,
        payload:  category

    }
}

export const get_products_success = (products) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const get_products_failure = (message) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload : message

    }
}