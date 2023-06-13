import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const Dis2 = () => {
    return(
            <div className="section2divpd">
                <h1 className="worldmenupd">DISCOUNTS MENU</h1>
                <div className="trashpd">
                    <div className="trashimgpd"></div>
                </div>
                <div className="div2pd">
                    <div className="antiflexd">
                        <div className="mekpd">
                            <div className="img1pd"></div>
                        </div>
                        <h1 className="pizzanamed">peperonni</h1>
                        <h1 className="infod">italian, 5$</h1>
                        <Button className="pbtn1d">buy$</Button>
                        <Button className="pbtn2d">trash</Button>
                    </div>
                    <div className="antiflexd">
                        <div className="erkupd">
                            <div className="img2pd"></div>
                        </div>
                        <h1 className="pizzanamed">peperonni</h1>
                        <h1 className="infod">italian, 5$</h1>
                        <Button className="pbtn1d">buy$</Button>
                        <Button className="pbtn2d">trash</Button>
                    </div>
                </div>
                <div className="div22pd">
                    <div className="antiflexd">
                        <div className="mek2pd">
                            <div className="img3pd"></div>
                        </div>
                        <h1 className="pizzanamed">peperonni</h1>
                        <h1 className="infod">italian, 5$</h1>
                        <Button className="pbtn1d">buy$</Button>
                        <Button className="pbtn2d">trash</Button>
                    </div>
                    <div className="antiflexd">
                        <div className="erku2pd">
                            <div className="img4pd"></div>
                        </div>
                        <h1 className="pizzanamed">peperonni</h1>
                        <h1 className="infod">italian, 5$</h1>
                        <Button className="pbtn1d">buy$</Button>
                        <Button className="pbtn2d">trash</Button>
                    </div>
                </div>
                <div className="div23pd">
                    <div className="antiflexd">
                        <div className="mek3pd">
                            <div className="img5pd"></div>
                        </div>
                        <h1 className="pizzanamed">peperonni</h1>
                        <h1 className="infod">italian, 5$</h1>
                        <Button className="pbtn1d">buy$</Button>
                        <Button className="pbtn2d">trash</Button>
                    </div>
                    <div className="antiflexd">
                        <div className="erku3pd">
                            <div className="img6pd"></div>
                        </div>
                        <h1 className="pizzanamed">peperonni</h1>
                        <h1 className="infod">italian, 5$</h1>
                        <Button className="pbtn1d">buy$</Button>
                        <Button className="pbtn2d">trash</Button>
                    </div>
                </div>
            </div>
    )
}

export default Dis2;