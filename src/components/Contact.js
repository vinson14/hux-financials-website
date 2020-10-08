import React from "react";
import Header from "./micro-components/Header";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header position="sticky" background="white" />
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <h1>Contact Page</h1>
                </div>
            </div>
        );
    }
}

export default Contact;
