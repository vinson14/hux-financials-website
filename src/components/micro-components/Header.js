import React from "react";

import NavBarMobile from "./NavBarMobile";
import NavBar from "./NavBar";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: this.props.position,
            bg: this.props.bg,
            links: [
                { id: 1, text: "Home", path: '/' },
                { id: 2, text: "About", path: '/about' },
                { id: 3, text: "Contact Us", path: '/contact' },
                { id: 4, text: "Testimonials", path: '/testimonial' },
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
            return <NavBarMobile parameters={this.state} />;
        } else {
            return <NavBar parameters={this.state} />;
        }
    }
}

export default Header;
