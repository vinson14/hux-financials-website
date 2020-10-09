import React from "react";

import LandingPage from "./micro-components/LandingPage";
import Header from "./micro-components/Header";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Header position="fixed" bg="transparent" />
                <LandingPage />
            </div>
        );
    }
}

export default Home;
