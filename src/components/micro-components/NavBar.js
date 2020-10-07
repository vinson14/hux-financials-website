import React from "react";
import * as BS from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logoLightCropped from "../../static/logos/light-cropped.png";
import logoLight from "../../static/logos/light.png";
import logoDark from "../../static/logos/dark.png";
import "../../static/css/navbar.css";

const baseUrl = "/hux-financials-website";

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            links: [
                { id: 1, text: "Home", path: `${baseUrl}/` },
                { id: 2, text: "About", path: `${baseUrl}/about` },
                { id: 3, text: "Contact Us", path: `${baseUrl}/contact` },
                { id: 4, text: "Testimonials", path: `${baseUrl}/testimonial` },
            ],
            sidebarActive: "",
            toggleIcon: "fa-bars",
            iconColor: "text-dark",
            logo: logoDark,
        };
    }

    toggleSideBar = () => {
        console.log("clicked");
        if (this.state.sidebarActive) {
            this.setState({
                sidebarActive: "",
                toggleIcon: "fa-bars",
                iconColor: "text-dark",
                logo: logoDark,
            });
        } else {
            this.setState({
                sidebarActive: "sidebar-active",
                toggleIcon: "fa-times",
                iconColor: "text-light",
                logo: logoLight,
            });
        }
    };

    render() {
        const horizontal_links = this.state.links.map((link) => {
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

        const vertical_links = this.state.links.map((link) => {
            return (
                <NavLink
                    key={link.id}
                    to={link.path}
                    className="h3 my-3 py-1 a-text nav-hover pri-font fit-content"
                    onClick={this.toggleSideBar}
                    exact
                >
                    {link.text}
                </NavLink>
            );
        });

        return (
            <div>
                <BS.Navbar
                    expand="lg"
                    className={`${this.props.position}-top p-3 bg-red-solid navbar-dark d-none d-lg-flex`}
                >
                    <BS.Navbar.Brand href="#home" className="pl-3">
                        <BS.Image
                            src={logoLightCropped}
                            width="195"
                            height="60"
                        />
                    </BS.Navbar.Brand>
                    <BS.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <BS.Navbar.Collapse id="basic-navbar-nav" className="pr-3">
                        <BS.Nav className="ml-auto navbar-nav">
                            {horizontal_links}
                        </BS.Nav>
                    </BS.Navbar.Collapse>
                </BS.Navbar>
                <div className={`${this.props.position}-top d-lg-none d-flex justify-content-between`}>
                    <a>
                        <BS.Image src={this.state.logo} width="250" />
                    </a>
                    <a
                        id="sidebar-expand"
                        className="btn bg-transparent z-depth-0 p-5 d-lg-none d-flex align-items-center"
                        onClick={this.toggleSideBar}
                    >
                        <i
                            id="sidebar-expand-icon"
                            className={`fas ${this.state.toggleIcon} fa-2x ${this.state.iconColor}`}
                        ></i>
                    </a>
                </div>

                <BS.Nav
                    id="sidebar"
                    className={`${this.state.sidebarActive} flex-column bg-red-solid justify-content-center align-items-center`}
                >
                    {vertical_links}
                </BS.Nav>
            </div>
        );
    }
}

export default NavBar;
