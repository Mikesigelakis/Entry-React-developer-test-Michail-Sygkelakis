
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './style.css'
import brand from "../../assets/svgs/brand.svg";
import ModalCurrency from "../modals/modal-currency";
import ModalBasket from "../modals/modal-basket";


class Headnav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const categories = ['all', 'clothes', 'tech']
        const navLinks = categories.map(item => {
            return (
                <NavLink key={item} className={isActive =>
                    "navigation-item" + (!isActive ? " " : "-selected")
                } to={'/'+item} style={{ textDecoration: 'none' }}>
                    <div>{item}</div>
                </NavLink>
            )
        })

        return (<>
            <div className="header">
                <div className="navigation">
                    {navLinks}
                </div>
                <div className="brand-icon">
                    <NavLink to="/cart">
                        <img src={brand} alt='brand-icon' />
                    </NavLink>
                </div>
                <div className="modals">
                    <div className="modal-currency">
                        <ModalCurrency />
                    </div>
                    <div className="modal-basket">
                        <ModalBasket />
                    </div>
                </div>

            </div>



        </>);
    }
}

export default Headnav;