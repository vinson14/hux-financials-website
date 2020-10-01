import React from "react";
import * as BS from "react-bootstrap";
import logo from "../static/logos/Hux_Long_Dark.png";

import NavBar from "./NavBar";
import LandingPage from "./LandingPage";

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Home">
                <NavBar />
                <LandingPage />
            </div>
        );
    }
}

export default Home;
