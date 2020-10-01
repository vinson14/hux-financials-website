import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default App;
