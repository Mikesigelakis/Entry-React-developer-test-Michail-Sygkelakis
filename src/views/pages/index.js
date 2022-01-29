import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Category } from "./category";
import Pdb from "./pdp";
import Cart from "./cart";
 


class Pages extends Component {
    render() {


        return (
            <>
                <Switch>
                    <Route path={`/all`} render={() => <Category category={'all'} />} />
                    <Route path={`/clothes`} render={() => <Category category={'clothes'} />} />
                    <Route path={`/tech`} render={() => <Category category={'tech'} />} />
                    <Route path={`/pdp/:id`} render={() => <Pdb />} />
                    <Route path={`/cart`} render={() => <Cart/>} />
                
                    <Redirect from={`/`} to={`/all`} />
                </Switch>
            </>
        )
    }
}

export default Pages;