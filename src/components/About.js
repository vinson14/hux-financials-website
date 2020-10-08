import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProfileCard from "./micro-components/ProfileCard";
import Header from "./micro-components/Header";
import Footer from "./micro-components/Footer";

const profiles = [
    {
        name: "Vinson",
    },
    {
        name: "Hux",
    },
    {
        name: "Lydia",
    },
    {
        name: "Seraphine",
    },
    {
        name: "Jia Xin",
    },
    {
        name: "Kendra",
    }
];

class About extends React.Component {
    render() {
        return (
            <div>
                <Header position="sticky" bg="white" />
                <Container className="h-100 d-flex flex-column justify-content-center align-items-center pt-5">
                    <Row>
                        <h1 className="pri-font mb-5">Our Team</h1>
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
                <Footer />
            </div>
        );
    }
}

export default About;
