import { GET_PRODUCTS_DETAILS_FAILURE, GET_PRODUCT_DETAILS, GET_PRODUCT__DETAILS_SUCCESS } from "../../constants/redux/Product"

export const get_product_details = (id) => {
    return {
        type: GET_PRODUCT_DETAILS,
        payload:  id

    }
}

export const get_product_details_success = (product)=>{
    return {
        type: GET_PRODUCT__DETAILS_SUCCESS , 
        payload : product
    }
}

export const get_product_details_failure = (message)=>{
    return {
        type: GET_PRODUCTS_DETAILS_FAILURE , 
        payload : message
    }
}