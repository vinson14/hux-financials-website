import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const baseUrl = "/hux-financials-website"

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path={`${baseUrl}/`} exact component={Home} />
                    <Route path={`${baseUrl}/about`} exact component={About} />
                    <Route path={`${baseUrl}/contact`} exact component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
