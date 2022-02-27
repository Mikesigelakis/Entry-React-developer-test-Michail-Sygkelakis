import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
} from "../../constants/redux/Categories";

export const get_categories = () => {
  return {
    type: GET_CATEGORIES,
  };
};

export const get_categories_success = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const get_categories_failure = (message) => {
  return {
    type: GET_CATEGORIES_FAILURE,
    payload: message,
  };
};
