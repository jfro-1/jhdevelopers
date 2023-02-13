/** @format */
 // import "/resources/css/app.css;
import React from "react";
import {createRoot} from "react-dom/client";
import "./App.css";

import {BrowserRouter, Route, Routes,NavLink} from "react-router-dom";
import Home from "../test/Home";
import About from "../test/About";
import Contact from "../test/Contact";
import Navbar from "../test/Navbar/Navbar.component";
import Footer from "../test/Footer/Footer.component";
const App = () => {
    return (
<BrowserRouter>
<Navbar />
    <Routes>
        <Route exat path="/" element={ <Home /> }/>
        <Route  path="/about" element={ <About /> }/>
        <Route  path="/contact" element={ <Contact /> }/>
    </Routes>
    <Footer/>
</BrowserRouter>
    );
};

export default App;
