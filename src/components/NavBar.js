import React from "react";
import * as BS from "react-bootstrap";
import logo from "../static/logos/light-cropped.png";
import "../static/css/navbar.css"

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            links: [
                { id: 1, text: "Home" },
                { id: 2, text: "About" },
                { id: 3, text: "Contact Us" },
                { id: 4, text: "Testimonials" },
            ],
        };
    }

    render() {
        const links = this.state.links.map((link) => {
            return (
                <BS.Nav.Link href={`#${link.home}`} key={link.id} className=" px-3 text-light">
                    {link.text}
                </BS.Nav.Link>
            );
        });

        return (
            <BS.Navbar expand="lg" className="fixed-top p-3 bg-red-solid navbar-dark">
                <BS.Navbar.Brand href="#home" className="pl-3">
                    <BS.Image src={logo} width="195" height="60"/>
                </BS.Navbar.Brand>
                <BS.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <BS.Navbar.Collapse id="basic-navbar-nav" className="pr-3">
                    <BS.Nav className="ml-auto">
                        {links}
                    </BS.Nav>
                </BS.Navbar.Collapse>
            </BS.Navbar>
        );
    }
}

export default NavBar;
