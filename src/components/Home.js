import React from "react";

import NavBar from "./micro-components/NavBar";
import LandingPage from "./micro-components/LandingPage";
import Header from "./micro-components/Header";

class Home extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div className="Home">
                <Header position="sticky" />
                <LandingPage />
            </div>
        );
    }
}

export default Home;
