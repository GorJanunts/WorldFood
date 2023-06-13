import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";

const Footer = () => {
    return(
        <div className="footerdiv">
                <ul className="ulf">
                    <li className="lif1">Customers</li>
                    <li className="lif2">Co-workers</li>
                    <li className="lif3">Useful links</li>
                </ul>
                <ul className="ulf2">
                    <li className="lif12"><u>how to order ?</u></li>
                    <li className="lif22"><u>become a delivery partner</u></li>
                    <li className="lif32"><u>general terms and conditions</u></li>
                </ul>
                <ul className="ulf3">
                    <li className="lif13">Follow us on social media</li>
                    <li className="lif23">Payment methods</li>
                    <li className="lif33">Download WorldFood App</li>
                </ul>
            <div className="sostalk">
                <div className="sostalk2">
                <div className="social">
                    <div className="faclogo"></div>
                    <div className="instlogo"></div>
                    <div className="gologo"></div>
                    <div className="twlogo"></div>
                </div>
                <div className="stalk"></div>
                </div>
                <div className="sostalk2">
                    <div className="dow"></div>
                </div>
            </div>
            <div className="end">
                <h3 className="verj">© All rights reserved WorldFoodGroup 2023</h3>
            </div>
        </div>
    )
}
export default Footer;