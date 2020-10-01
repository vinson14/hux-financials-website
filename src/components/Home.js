import React from "react";

import LandingPage from "./LandingPage";

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Home">
                <LandingPage />
            </div>
        );
    }
}

export default Home;
