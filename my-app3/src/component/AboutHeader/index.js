import React from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const AboutHeader = () => {
    return(
            <div className="headerdiva">
                <Link to="/"><div className="logoa"></div></Link>
                <div className="menua">
                    <ul className="menuULa">
                        <Link className="link1a" to="/"><li className="menuLI1a">HOME</li></Link>
                        <Link className="link2a" to="/worldmenu"><li className="menuLI2a">MENU</li></Link>
                        <Link className="link3a" to="/aboutus"><li className="menuLI3a">ABOUT US</li></Link>
                        <Link className="link4a" to="/contactus"><li className="menuLI4a">CONTACT US</li></Link>
                    </ul>
                </div>
                <select className="seca">
                    <option className="opa">ENG</option>
                    <option className="opa">RUS</option>
                    <option className="opa">ARM</option>
                </select>
            </div> 
    )
}

export default AboutHeader;