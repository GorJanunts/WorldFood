import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";

const Section3 = () => {
    return(
        <div className="section3div">
            <h1 className="about">ABOUT US</h1>
            <h1 className="text">WorldFood.am is a fast delivery service from 500 restaurants<br></br>
            and specialized stores of Yerevan ... <span className="mores"><u>more</u></span></h1>
            <div className="astxer">
                <div className="astx1"></div>
                <div className="astx2"></div>
                <div className="astx3"></div>
                <div className="astx4"></div>
                <div className="astx5"></div>
            </div>
            <h1 className="thank">thank you</h1>
            <Button className="send">send</Button>
        </div>
    )
}
export default Section3;