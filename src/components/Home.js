import React from "react";

import NavBar from "./NavBar.js"
import LandingPage from "./LandingPage";

class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <NavBar sticky={"fixed"} />
                <LandingPage />
            </div>
        );
    }
}

export default Home;
