import React from 'react';

import NavBarMobile from './NavBarMobile'

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
            ]
        };
    }

    render() {
        return (
            <NavBarMobile position={this.props.position} />
        )
    }
}

export default Header