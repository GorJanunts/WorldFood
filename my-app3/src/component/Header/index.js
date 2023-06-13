import React from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return(
            <div className="headerdiv">
                <Link to="/"><div className="logo"></div></Link>
                <div className="menu">
                    <ul className="menuUL">
                        <Link className="link1" to="/"><li className="menuLI1">HOME</li></Link>
                        <li className="menuLI2" onClick={s}>MENU</li>
                        <Link className="link2" to="/aboutus"><li className="menuLI3">ABOUT US</li></Link>
                        <Link className="link3" to="/contactus"><li className="menuLI4">CONTACT US</li></Link>
                    </ul>
                </div>
                <select className="sec">
                    <option className="op">ENG</option>
                    <option className="op">RUS</option>
                    <option className="op">ARM</option>
                </select>
            </div> 
    )
}

function s() {
    window.scroll({
        top: 700,
        behavior: 'smooth',
    })
}

export default Header;