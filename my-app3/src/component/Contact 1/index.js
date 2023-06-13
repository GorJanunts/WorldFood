import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";

const Contact1 = () => {
    return(
        <div className="contact1div">
            <h1 className="h1c"><u>Contact Us</u></h1>
            <div className="inputs">
                <form>
                    <p className="p">Email *</p>
                    <input autocomplete="off" type="email" required name="form[]" className="inp1" placeholder="enter your mail" />
                    <p className="p">Title *</p>
                    <input autocomplete="off" type="text" required name="form[]" className="inp2" placeholder="enter your title" />
                    <p className="p">Message *</p>
                    <input autocomplete="off" type="text" required name="form[]" className="inp3" placeholder="enter message here" />
                    <button className="sendc" type="sumbit">send</button>
                </form>
            </div>
            
            <h1 className="h12c"><u>Head office address and contacts</u></h1>
            <p className="text1c">
            <span className="spanc">Address:</span>  8th building Marshal Baghramyan Avenue 2nd Lane, Yerevan 0019,<br></br>
            Republic of Armenia<br></br>
            <span className="spanc">Telephone:</span>  +374 12 222 000<br></br>
            <span className="spanc">E-mail:</span>  info@worldfood.am
            </p>
       </div>
    )
}
export default Contact1;