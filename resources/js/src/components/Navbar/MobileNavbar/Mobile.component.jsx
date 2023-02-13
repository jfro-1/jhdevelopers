/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Mobile.css";

export const MobileNavbar = (props) => {
    const isOpenClass = props.open ? "mobile-nav-bar open" : "mobile-nav-bar";
    return (
        <nav className={isOpenClass}>
            <Link
                href="/"
                onClick={() => {
                    props.handleMobile(false);
                }}
            >
                Home
            </Link>
            <a
                href="#"
                onClick={() => {
                    props.handleMobile(false);
                }}
            >
                About Me
            </a>
            <a
                href="#"
                onClick={() => {
                    props.handleMobile(false);
                }}
            >
                Services
            </a>
            <a
                href="#"
                onClick={() => {
                    props.handleMobile(false);
                }}
            >
                Price
            </a>
            <a
                href="#"
                onClick={() => {
                    props.handleMobile(false);
                }}
            >
                Blog
            </a>
            <a
                href="#"
                onClick={() => {
                    props.handleMobile(false);
                }}
            >
                Pages
            </a>
            <Link
                to="/contact"
                onClick={() => {
                    props.handleMobile(false);
                }}
            >
                Contact Us
            </Link>
        </nav>
    );
};
MobileNavbar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleMobile: PropTypes.func.isRequired,
};
