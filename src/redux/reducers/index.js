import { combineReducers } from "redux";
import Currencies from "./Currencies";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";
import Categories from "./Categories";

const reducers = combineReducers({
    currencies: Currencies,
    products: Products,
    product: Product,
    cart: Cart , 
    categories : Categories 
})

export default reducers;