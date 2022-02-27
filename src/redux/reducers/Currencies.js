import {
  CHANGE_CURRENCY,
  GET_CURRENCIES,
  GET_CURRENCIES_FAILED,
  GET_CURRENCIES_SUCCESS,
} from "../../constants/redux/Currencies";

const initState = {
  currencies: [],
  message: null,
  loading: true,
};

const currencies = (state = initState, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      state.message =  null
      state = initState;
      return Object.assign({}, state);
    case GET_CURRENCIES_FAILED:
      state.message = action.payload;
      return Object.assign({}, state);
    case GET_CURRENCIES_SUCCESS:
      state.message = null ; 
      state.loading = false;
      state.currencies = action.payload;
      return Object.assign({}, state);
    case CHANGE_CURRENCY:
      const index_in_array = state.currencies.findIndex(
        (currency) => action.payload === currency.symbol
      );
      const selected_currency = state.currencies[index_in_array];
      state.currencies = state.currencies.filter(
        (item, key) => key != index_in_array
      );
      state.currencies.unshift(selected_currency);
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default currencies;
