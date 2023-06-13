import React from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const PizzaMenuHeader = () => {
    return(
            <div className="headerdivph">
                <Link to="/"><div className="logoph"></div></Link>
                <div className="menuph">
                    <ul className="menuULph">
                        <Link className="link1ph" to="/"><li className="menuLI1ph">HOME</li></Link>
                        <Link className="link2ph" to="/worldmenu"><li className="menuLI2ph">MENU</li></Link>
                        <Link className="link3ph" to="/aboutus"><li className="menuLI3ph">ABOUT US</li></Link>
                        <Link className="link4ph" to="/contactus"><li className="menuLI4ph">CONTACT US</li></Link>
                    </ul>
                </div>
                <select className="secph">
                    <option className="opph">ENG</option>
                    <option className="opph">RUS</option>
                    <option className="opph">ARM</option>
                </select>
            </div> 
    )
}

export default PizzaMenuHeader;