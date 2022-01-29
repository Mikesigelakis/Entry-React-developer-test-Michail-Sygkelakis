import { all,  fork, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "../../constants/redux/Products";
import { handlerGetProducts } from "./handlers/Products_handler";

export function* watcherGetProductsSaga() {
    yield takeLatest(GET_PRODUCTS, handlerGetProducts)
}

export default function* rootSaga() {
    yield all([
        fork(watcherGetProductsSaga)
    ])
}