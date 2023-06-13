import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const Shops2 = () => {
    return(
            <div className="section2divps">
                <h1 className="worldmenups">SHOPS MENU</h1>
                <div className="trashps">
                    <div className="trashimgps"></div>
                </div>
                <div className="div2ps">
                    <div className="antiflexs">
                        <div className="mekps">
                            <div className="img1ps"></div>
                        </div>
                        <h1 className="pizzanames">coffee</h1>
                        <h1 className="infos">italian, 5$</h1>
                        <Button className="pbtn1s">buy$</Button>
                        <Button className="pbtn2s">trash</Button>
                    </div>
                    <div className="antiflexs">
                        <div className="erkups">
                            <div className="img2ps"></div>
                        </div>
                        <h1 className="pizzanames">ice-cream</h1>
                        <h1 className="infos">italian, 2$</h1>
                        <Button className="pbtn1s">buy$</Button>
                        <Button className="pbtn2s">trash</Button>
                    </div>
                </div>
                <div className="div22ps">
                    <div className="antiflexs">
                        <div className="mek2ps">
                            <div className="img3ps"></div>
                        </div>
                        <h1 className="pizzanames">flowers</h1>
                        <h1 className="infos">italian, 7$</h1>
                        <Button className="pbtn1s">buy$</Button>
                        <Button className="pbtn2s">trash</Button>
                    </div>
                    <div className="antiflexs">
                        <div className="erku2ps">
                            <div className="img4ps"></div>
                        </div>
                        <h1 className="pizzanames">books</h1>
                        <h1 className="infos">italian, 15$</h1>
                        <Button className="pbtn1s">buy$</Button>
                        <Button className="pbtn2s">trash</Button>
                    </div>
                </div>
            </div>
    )
}

export default Shops2;