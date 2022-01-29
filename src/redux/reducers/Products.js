import { GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "../../constants/redux/Products";

const initState = {
    loading: true,
    message: '',
    products: [],

}


const products = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            state.loading = true
            state.message = ''
            state.products = []
            return Object.assign({}, state)
        case GET_PRODUCTS_FAILURE:
            state.loading = false
            state.products = []
            state.message = action.payload
            return Object.assign({}, state)
        case GET_PRODUCTS_SUCCESS:
            state.loading = false
            state.message = ''
            state.products = action.payload.category
            return Object.assign({}, state)
        default:
            return state;
    }
}

export default products;