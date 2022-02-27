import { client } from "@tilework/opus";
import { put } from "redux-saga/effects";
import { PRODUCT_DETAILS_QUERY } from "../../../constants/api/product_queries";
import { get_product_details_failure, get_product_details_success } from "../../actions/Product";
    

export function* handlerGetProductDetails(action) {
    try {
        const product = yield (client.post(PRODUCT_DETAILS_QUERY(action.payload)))
        yield (put(get_product_details_success(product)))
    }
    catch (e) {
        console.log(e)
        yield (put(get_product_details_failure(e.message)))
    }



}