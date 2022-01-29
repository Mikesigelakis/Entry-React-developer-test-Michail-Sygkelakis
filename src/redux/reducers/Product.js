import { GET_PRODUCTS_DETAILS_FAILURE, GET_PRODUCT_DETAILS, GET_PRODUCT__DETAILS_SUCCESS } from "../../constants/redux/Product";

const initState = {
    loading: true,
    message: '',
    product: {},

}


const product = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS:
            return Object.assign({}, initState)
        case GET_PRODUCTS_DETAILS_FAILURE:
            state.loading = false
            state.product = {}
            state.message = action.payload
            return Object.assign({}, state)
        case GET_PRODUCT__DETAILS_SUCCESS:
            state.loading = false
            state.message = ''
            let product = Object.assign({} , action.payload.product )
            const attributes = action.payload.product.attributes.map(attribute => {
                const attribute_items = attribute.items.map((item, index) => {
                    if (index === 0) {
                        return Object.assign({}, item, { 'selected': true })
                    } else {
                        return Object.assign({}, item, {'selected': false })
                    }
                })
                return { 'id': attribute.id, 'items': attribute_items }
            })
             product.attributes = attributes
             state.product = product
             return Object.assign({}, state )
        default:
            return state;
    }
}

export default product;