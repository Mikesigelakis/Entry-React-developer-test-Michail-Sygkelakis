import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
} from "../../constants/redux/Categories";

const initState = {
  categories: [],
  message: null,
  loading: true,
};

const categories = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      state = initState;
      state.message = null;
      return Object.assign({}, state);
    case GET_CATEGORIES_FAILURE:
      state.message = action.payload;
      return Object.assign({}, state);
    case GET_CATEGORIES_SUCCESS:  
      state.message = null;
      state.loading = false;
      state.categories = action.payload;
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default categories;
