import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Section1 = () => {
    return(
            <div className="section1div">
                <h1 className="onlineh1">ONLINE<br></br>FOOD<br></br>IN THE<br></br>WORLD</h1>
                <div className="bigimg"></div>
                <div className="menu2">
                    <h1 className="jam">24 / 7</h1>
                    <ul className="menu2UL">
                        <li className="menu2LI1">restaurants</li>
                        <Link to="/shops" className="shopslink"><li className="menu2LI2">shops</li></Link>
                        <Link to="/discounts" className="dislink"><li className="menu2LI3">discounts</li></Link>
                    </ul>
                </div>
            </div>
    )
}

export default Section1;