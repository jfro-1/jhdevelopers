/** @format */

import "./App.css";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import  Navbar from "./src/components/Navbar/Navbar.component";
import  Home  from "./src/components/Home/Home.component";
import  Co from "./src/components/ContactUs/Co.component";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <RouteList />
            </Router>
        </div>

    );
}

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactUs" element={<Co />} />
        </Routes>
    );
};
export default App;
