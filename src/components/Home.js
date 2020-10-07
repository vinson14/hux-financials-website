import React from "react";

import NavBar from "./micro-components/NavBar"
import LandingPage from "./micro-components/LandingPage";

class Home extends React.Component {

    render() {
        console.log(this.props)

        return (
            <div className="Home">
                <NavBar position={"fixed"} />
                <LandingPage />
            </div>
        );
    }
}

export default Home;
