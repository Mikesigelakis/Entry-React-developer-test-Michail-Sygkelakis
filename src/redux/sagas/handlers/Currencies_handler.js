import { client } from "@tilework/opus";
import { put } from "redux-saga/effects";
import { CURRENCIES_QUERY } from "../../../constants/api/currencies_queries";
import {
    get_currencies_failed,
  get_currencies_success,
} from "../../actions/Currencies";

export function* handlerGetCurrencies() {
  try {
    const currencies = yield client.post(CURRENCIES_QUERY());
    yield put(get_currencies_success(currencies.currencies));
  } catch (e) {
    yield put(get_currencies_failed(e.message));
  }
}
