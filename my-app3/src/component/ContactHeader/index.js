import React from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const ContactHeader = () => {
    return(
            <div className="headerdivc">
                <Link to="/"><div className="logoc"></div></Link>
                <div className="menuc">
                    <ul className="menuULc">
                        <Link className="link1c" to="/"><li className="menuLI1c">HOME</li></Link>
                        <Link className="link2c" to="/worldmenu"><li className="menuLI2c">MENU</li></Link>
                        <Link className="link3c" to="/aboutus"><li className="menuLI3c">ABOUT US</li></Link>
                        <Link className="link3c" to="contactus"><li className="menuLI4c">CONTACT US</li></Link>
                    </ul>
                </div>
                <select className="secc">
                    <option className="opc">ENG</option>
                    <option className="opc">RUS</option>
                    <option className="opc">ARM</option>
                </select>
            </div> 
    )
}

export default ContactHeader;