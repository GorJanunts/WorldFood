import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import PizzaMenu from "./pages/PizzaMenu";
import Shops from "./pages/Shops";
import Discounts from "./pages/Discounts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route index element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/worldmenu" element={<Menu/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/pizzamenu" element={<PizzaMenu/>} />
          <Route path="/shops" element={<Shops/>} />
          <Route path="/discounts" element={<Discounts/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;