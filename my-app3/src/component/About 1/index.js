import React from "react";
import { ReactDOM } from "react";
import "./index.css";
import Button from "../Button";

const About1 = () => {
    return(
        <div className="about1div">
            <h1 className="h1a"><u>About Us</u></h1>
            <p className="texta">WorldFood.am is a fast delivery service from 500 restaurants and specialized stores of Yerevan. We<br></br>
            appear when you are hungry early in the morning, at noon, in the evening and even late at night. We<br></br>
            work for 24 hours, seven days a week. We deliver barbeque, pizza, sushi, burgers, Italian pasta, all the<br></br>
            possible types of desserts and other different dishes, which would please your appetite. Besides, with<br></br>
            the help of our website, you can order flowers, cakes, alcoholic and non-alcoholic beverages, hookah,<br></br>
            meals for children, animal food and other products from specialized stores.
            </p>
            <h1 className="h12a"><u>Head office address and contacts</u></h1>
            <p className="text2a">
            <span className="spana">Address:</span>  8th building Marshal Baghramyan Avenue 2nd Lane, Yerevan 0019,<br></br>
            Republic of Armenia<br></br>
            <span className="spana">Telephone:</span>  +374 12 222 000<br></br>
            <span className="spana">E-mail:</span>  info@worldfood.am
            </p>
       </div>
    )
}
export default About1;