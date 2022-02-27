import { all } from "redux-saga/effects";
import Products from "./Products";
import Product from "./Product";
import Currencies from "./Currencies";
import Categories from "./Categories";


export default function* rootSaga(getState){
    yield all([
        Product() , 
        Products() , 
        Currencies(),
        Categories()
    ])
}