import {
  CHANGE_CURRENCY,
  GET_CURRENCIES,
  GET_CURRENCIES_FAILED,
  GET_CURRENCIES_SUCCESS,
} from "../../constants/redux/Currencies.js";

export const get_currencies = () => {
  return {
    type: GET_CURRENCIES,
  };
};

export const get_currencies_success = (currencies) => {
  return {
    type: GET_CURRENCIES_SUCCESS,
    payload: currencies,
  };
};

export const get_currencies_failed = (message) => {
  return {
    type: GET_CURRENCIES_FAILED,
    payload: message,
  };
};

export const change_currency = (symbol) => {
  return {
    type: CHANGE_CURRENCY,
    payload: symbol,
  };
};
