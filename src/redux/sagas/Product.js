import { all,  fork, takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_DETAILS } from "../../constants/redux/Product";
import { handlerGetProductDetails } from "./handlers/Product_handler";

export function* watcherGetProductDetailsSaga() {
    yield takeLatest(GET_PRODUCT_DETAILS, handlerGetProductDetails)
}

export default function* rootSaga() {
    yield all([
        fork(watcherGetProductDetailsSaga)
    ])
}