import React from "react";
import { Nav, Image, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import logoLight from "../../static/logos/light.png";
import logoDark from "../../static/logos/dark.png";
import "../../static/css/navbarmobile.css";

class NavBarMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: this.props.parameters.links,
            navbarMobileActive: "",
            toggleIcon: "fa-bars",
            iconColor: "text-dark",
            logo: logoDark,
            bg: this.props.parameters.bg,
            position: this.props.parameters.position
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
            <div className={`${this.state.position}-top bg-${this.state.bg}`}>
                <div className="d-flex justify-content-between">
                    <Link id="brand-icon-link" to={this.state.links[0].path}>
                        <Image src={this.state.logo} width="250" />
                    </Link>
                    <Button
                        id="toggle-navbar-btn"
                        variant="outline-dark"
                        className="z-depth-0 p-5 border-0"
                        onClick={this.toggleNavBarMobile}
                    >
                        <i
                            id="toggle-navbar-icon"
                            className={`fas ${this.state.toggleIcon} fa-2x ${this.state.iconColor}`}
                        ></i>
                    </Button>
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
