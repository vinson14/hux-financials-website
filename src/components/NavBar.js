import React from "react";
import * as BS from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../static/logos/light-cropped.png";
import "../static/css/navbar.css";

const baseUrl = "/hux-financials-website"

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            links: [
                { id: 1, text: "Home", path: `${baseUrl}/` },
                { id: 2, text: "About", path: `${baseUrl}/about` },
                { id: 3, text: "Contact Us", path: `${baseUrl}/contact`},
                { id: 4, text: "Testimonials", path:  `${baseUrl}/testimonial` },
            ],
        };
    }

    render() {
        const links = this.state.links.map((link) => {
            return (
                <NavLink
                    key={link.id}
                    to={link.path}
                    className="mx-3 py-1 a-text nav-hover pri-font"
                    exact
                >
                    {link.text}
                </NavLink>
            );
        });

        return (
            <BS.Navbar
                expand="lg"
                className="fixed-top p-3 bg-red-solid navbar-dark"
            >
                <BS.Navbar.Brand href="#home" className="pl-3">
                    <BS.Image src={logo} width="195" height="60" />
                </BS.Navbar.Brand>
                <BS.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <BS.Navbar.Collapse id="basic-navbar-nav" className="pr-3">
                    <BS.Nav className="ml-auto">{links}</BS.Nav>
                </BS.Navbar.Collapse>
            </BS.Navbar>
        );
    }
}

export default NavBar;
