import React from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const MenuHeader = () => {
    return(
            <div className="headerdivm">
                <Link to="/"><div className="logom"></div></Link>
                <div className="menum">
                    <ul className="menuULm">
                        <Link className="link1m" to="/"><li className="menuLI1m">HOME</li></Link>
                        <Link className="link2m" to="/worldmenu"><li className="menuLI2m">MENU</li></Link>
                        <Link className="link3m" to="/aboutus"><li className="menuLI3m">ABOUT US</li></Link>
                        <Link className="link4m" to="/contactus"><li className="menuLI4m">CONTACT US</li></Link>
                    </ul>
                </div>
                <select className="secm">
                    <option className="opm">ENG</option>
                    <option className="opm">RUS</option>
                    <option className="opm">ARM</option>
                </select>
            </div> 
    )
}

export default MenuHeader;