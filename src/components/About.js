import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProfileCard from "./micro-components/ProfileCard";
import Profile from "./Profile";

const profiles = [
    {
        name: "Vinson"
    },
    {
        name: "Hux"
    },
    {
        name: "Lydia"
    },
];

class About extends React.Component {
    render() {
        console.log(this.props.match);
        return (
            <Container className="h-100 d-flex flex-column justify-content-center align-items-center pt-5">
                <Row>
                    <h1>Our Team</h1>
                </Row>
                <Row>
                    {profiles.map((profile) => (
                        <Col xs={12} md={6} lg={4} key={profile.name}>
                            <ProfileCard
                                profile={profile}
                                url={this.props.match.url}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default About;
