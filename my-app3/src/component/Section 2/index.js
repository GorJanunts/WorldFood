import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

const Section2 = () => {
    return(
            <div className="section2div">
                <h1 className="worldmenu">WORLD MENU</h1>
                <h1 className="evr">everything</h1>
                <div className="trash">
                    <div className="trashimg"></div>
                </div>

                <div className="div2">
                    <div className="antiflex">
                        <div className="mek">
                            <div className="img1"></div>
                        </div>
                        <Link to="/pizzamenu"><Button className="btn1">pizza menu</Button></Link>
                    </div>
                    <div className="antiflex">
                        <div className="erku">
                            <div className="img2"></div>
                        </div>
                        <Button className="btn2">fastfood menu</Button>
                    </div>
                </div>

                <div className="div22">
                    <div className="antiflex">
                        <div className="mek2">
                            <div className="img3"></div>
                        </div>
                        <Button className="btn3">sushi menu</Button>
                    </div>
                    <div className="antiflex">
                        <div className="erku2">
                        <div className="img4"></div>
                        </div>
                        <Button className="btn4">pasta menu</Button>
                    </div>
                </div>

                <div className="div23">
                    <div className="antiflex">
                        <div className="mek3">
                        <div className="img5"></div>
                        </div>
                        <Button className="btn5">fish’s menu</Button>
                    </div>
                    <div className="antiflex">
                        <div className="erku3">
                        <div className="img6"></div>
                        </div>
                        <Button className="btn6">it. pizza menu</Button>
                    </div>
                </div>

                <h2 className="more"><u>more...</u></h2>
            </div>
    )
}

export default Section2;