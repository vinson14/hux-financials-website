import React from "react";
import { Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logoLightCropped from "../../static/logos/light-cropped.png";
import logoLight from "../../static/logos/light.png";
import logoDark from "../../static/logos/dark.png";
import "../../static/css/navbarmobile.css";

const baseUrl = "/hux-financials-website";

class NavBarMobile extends React.Component {
    constructor() {
        super();
        this.state = {
            links: [
                { id: 1, text: "Home", path: `/` },
                { id: 2, text: "About", path: `/about` },
                { id: 3, text: "Contact Us", path: `/contact` },
                { id: 4, text: "Testimonials", path: `/testimonial` },
            ],
            navbarMobileActive: "",
            toggleIcon: "fa-bars",
            iconColor: "text-dark",
            logo: logoDark,
        };
    }

    toggleNavBarMobile = () => {
        console.log('clicked')
        if (this.state.navbarMobileActive) {
            this.setState({
                navbarMobileActive: "",
                toggleIcon: "fa-bars",
                iconColor: "text-dark",
                logo: logoDark
            })
        } else {
            this.setState({
                navbarMobileActive: "navbar-mobile-active",
                toggleIcon: "fa-times",
                iconColor: "text-light",
                logo: logoLight
            })
        }
    }

    render() {
        const links = this.state.links.map((link) => {
            return (
                <NavLink
                    key={link.id}
                    to={link.path}
                    className="h3 my-3 py-1 a-text nav-hover pri-font fit-content"
                    onClick={this.toggleNavBarMobile}
                    exact
                >
                    {link.text}
                </NavLink>
            );
        });

        return (
            <div className={`${this.props.position}-top bg-${this.props.bg}`}>
                <div className="d-flex justify-content-between">
                    <a>
                        <Image src={this.state.logo} width="250" />
                    </a>
                    <a
                        id="toggle-navbar-btn"
                        className="btn bg-transparent z-depth-0 p-5 d-flex align-items-center"
                        onClick={this.toggleNavBarMobile}
                    >
                        <i
                            id="toggle-navbar-icon"
                            className={`fas ${this.state.toggleIcon} fa-2x ${this.state.iconColor}`}
                        ></i>
                    </a>
                </div>
                <Nav
                    id="sidebar"
                    className={`${this.state.navbarMobileActive} flex-column bg-red-solid justify-content-center align-items-center`}
                >
                    {links}
                </Nav>
            </div>
        );
    }
}

export default NavBarMobile;
