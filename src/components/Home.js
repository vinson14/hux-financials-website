import React from "react";
import * as BS from "react-bootstrap";
import logo from "../static/logos/Hux_Long_Dark.png";

import NavBar from "./NavBar";
import HomeContent from "./HomeContent";

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavBar />
                <HomeContent />
            </div>
        );
    }
}

export default Home;
