import { client } from "@tilework/opus";
import { put } from "redux-saga/effects";
import { CATEGORIES_QUERY } from "../../../constants/api/categories_queries";
import { get_categories_failure, get_categories_success } from "../../actions";

export function* handlerGetCategories() {
  try {
    const categories = yield client.post(CATEGORIES_QUERY());
    yield put(get_categories_success(categories.categories));
  } catch (e) {
    yield put(get_categories_failure(e.message));
  }
}
