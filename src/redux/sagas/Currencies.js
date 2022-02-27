import { all, fork, takeLatest } from "redux-saga/effects";
import { GET_CURRENCIES } from "../../constants/redux/Currencies";
import { handlerGetCurrencies } from "./handlers/Currencies_handler";

export function* watcherGetCurrenciesSaga() {
  yield takeLatest(GET_CURRENCIES, handlerGetCurrencies);
}

export default function* rootSaga() {
  yield all([fork(watcherGetCurrenciesSaga)]);
}
