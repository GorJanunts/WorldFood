import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Section1 = () => {
    return(
            <div className="section1divs">
                <h1 className="onlineh1s">ONLINE<br></br>FOOD<br></br>IN THE<br></br>WORLD</h1>
                <div className="bigimgs"></div>
                <div className="menu2s">
                    <h1 className="jams">24 / 7</h1>
                    <ul className="menu2ULs">
                        <Link className="shopslink" to="/"><li className="menu2LI1s">restaurants</li></Link>
                        <li className="menu2LI2s">shops</li>
                        <Link className="shopslink" to="/discounts"><li className="menu2LI3s">discounts</li></Link>
                    </ul>
                </div>
            </div>
    )
}

export default Section1;