import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

const baseUrl = "/hux-financials-website";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path={`${baseUrl}/`} exact component={Home} />
                <Route path={`${baseUrl}/about`} exact component={About} />
                <Route path={`${baseUrl}/about/:name`} component={Profile} />
                <Route path={`${baseUrl}/contact`} exact component={Contact} />
                <Route
                    path={`${baseUrl}/testimonial`}
                    exact
                    component={Testimonial}
                />
            </div>
        </Router>
    );
}

export default App;
