import React from "react";

import NavBarMobile from "./NavBarMobile";
import NavBar from "./NavBar";

const baseUrl = "/hux-financials-website";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            links: [
                { id: 1, text: "Home", path: `${baseUrl}/` },
                { id: 2, text: "About", path: `${baseUrl}/about` },
                { id: 3, text: "Contact Us", path: `${baseUrl}/contact` },
                { id: 4, text: "Testimonials", path: `${baseUrl}/testimonial` },
            ],
            isMobile: false,
        };
    }

    handleWindowResize = () => {
        this.setState({
            isMobile: window.innerWidth < 992,
        });
    };

    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth < 992,
        });
        window.addEventListener("resize", this.handleWindowResize);
    }

    render() {
        if (this.state.isMobile) {
            return <NavBarMobile position={this.props.position} bg={this.props.bg} />;
        } else {
            return <NavBar position={this.props.position} />;
        }
    }
}

export default Header;
