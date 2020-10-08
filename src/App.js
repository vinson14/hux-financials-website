import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Profile from "./components/Profile";

function App(props) {
    return (
        <Router basename="/">
            <div className="App">
                <Switch>
                    {" "}
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route
                        path='/about/:name'
                        component={Profile}
                    />
                    <Route
                        path='/contact'
                        exact
                        component={Contact}
                    />
                    <Route
                        path='/testimonial'
                        exact
                        component={Testimonial}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
