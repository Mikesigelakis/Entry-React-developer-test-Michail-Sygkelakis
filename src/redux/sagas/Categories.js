import { all, fork, takeLatest } from "redux-saga/effects";
import { GET_CATEGORIES } from "../../constants/redux/Categories";
import { handlerGetCategories } from "./handlers/Categories_handler";

export function* watcherGetCategoriesSaga() {
  yield takeLatest(GET_CATEGORIES, handlerGetCategories);
}

export default function* rootSaga() {
  yield all([fork(watcherGetCategoriesSaga)]);
}
