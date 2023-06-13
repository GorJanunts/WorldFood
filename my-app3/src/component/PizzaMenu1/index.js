import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const PizzaMenu1 = () => {
    return(
            <div className="section2divp">
                <h1 className="worldmenup">PIZZA’S MENU</h1>
                <div className="trashp">
                    <div className="trashimgp"></div>
                </div>
                <div className="div2p">
                    <div className="antiflex">
                        <div className="mekp">
                            <div className="img1p"></div>
                        </div>
                        <h1 className="pizzaname">peperonni</h1>
                        <h1 className="info">italian, 5$</h1>
                        <Button className="pbtn1">buy$</Button>
                        <Button className="pbtn2">trash</Button>
                    </div>
                    <div className="antiflex">
                        <div className="erkup">
                            <div className="img2p"></div>
                        </div>
                        <h1 className="pizzaname">peperonni</h1>
                        <h1 className="info">italian, 5$</h1>
                        <Button className="pbtn1">buy$</Button>
                        <Button className="pbtn2">trash</Button>
                    </div>
                </div>
                <div className="div22p">
                    <div className="antiflex">
                        <div className="mek2p">
                            <div className="img3p"></div>
                        </div>
                        <h1 className="pizzaname">peperonni</h1>
                        <h1 className="info">italian, 5$</h1>
                        <Button className="pbtn1">buy$</Button>
                        <Button className="pbtn2">trash</Button>
                    </div>
                    <div className="antiflex">
                        <div className="erku2p">
                            <div className="img4p"></div>
                        </div>
                        <h1 className="pizzaname">peperonni</h1>
                        <h1 className="info">italian, 5$</h1>
                        <Button className="pbtn1">buy$</Button>
                        <Button className="pbtn2">trash</Button>
                    </div>
                </div>
                <div className="div23p">
                    <div className="antiflex">
                        <div className="mek3p">
                            <div className="img5p"></div>
                        </div>
                        <h1 className="pizzaname">peperonni</h1>
                        <h1 className="info">italian, 5$</h1>
                        <Button className="pbtn1">buy$</Button>
                        <Button className="pbtn2">trash</Button>
                    </div>
                    <div className="antiflex">
                        <div className="erku3p">
                            <div className="img6p"></div>
                        </div>
                        <h1 className="pizzaname">peperonni</h1>
                        <h1 className="info">italian, 5$</h1>
                        <Button className="pbtn1">buy$</Button>
                        <Button className="pbtn2">trash</Button>
                    </div>
                </div>
            </div>
    )
}

export default PizzaMenu1;