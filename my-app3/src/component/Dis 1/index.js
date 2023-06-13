import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Dis1 = () => {
    return(
            <div className="section1divd">
                <h1 className="onlineh1d">ONLINE<br></br>FOOD<br></br>IN THE<br></br>WORLD</h1>
                <div className="bigimgd"></div>
                <div className="menu2d">
                    <h1 className="jamd">24 / 7</h1>
                    <ul className="menu2ULd">
                        <Link to="/" className="shopslinkd"><li className="menu2LI1d">restaurants</li></Link>
                        <Link to="/shops" className="shopslinkd"><li className="menu2LI2d">shops</li></Link>
                        <li className="menu2LI3d">discounts</li>
                    </ul>
                </div>
            </div>
    )
}

export default Dis1;