import React from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logoLightCropped from "../../static/logos/light-cropped.png";

import "../../static/css/navbar.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: this.props.parameters.links,
            position: this.props.parameters.position
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
                <Navbar
                    expand="lg"
                    className={`${this.state.position}-top p-3 bg-red-solid navbar-dark d-flex`}
                >
                    <Navbar.Brand href="#home" className="pl-3">
                        <Image
                            src={logoLightCropped}
                            width="195"
                            height="60"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="pr-3">
                        <Nav className="ml-auto navbar-nav">
                            {links}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default NavBar;
