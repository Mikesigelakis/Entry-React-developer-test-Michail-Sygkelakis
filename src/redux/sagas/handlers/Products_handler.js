import { client } from "@tilework/opus";
import  {PRODUCTS_QUERY}   from "../../../constants/api/products_queries";
import {  put } from "redux-saga/effects";
import { get_products_failure, get_products_success } from "../../actions/Products";


export function* handlerGetProducts(action) {
        try {   
                 const products =yield (client.post(PRODUCTS_QUERY(action.payload)))
                yield (put(get_products_success(products)))
        }
        catch (e) {
                yield (put(get_products_failure(e.message)))
        }
}