import { all } from "redux-saga/effects";
import Products from "./Products";
import Product from "./Product";


export default function* rootSaga(getState){
    yield all([
        Product() , 
        Products()  
    ])
}