import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Header from "./micro-components/Header";

class Profile extends React.Component {
    render() {
        return (
            <div>
                <Header position="sticky" bg="white" />
                <Container className="h-100">
                    <Row>
                        <Col md={6} className="p-5">
                            <Image
                                src={require(`../static/img/${this.props.match.params.name}.jpg`)}
                                fluid
                            />
                        </Col>
                        <Col
                            md={6}
                            className="p-5 align-items-center d-flex flex-column justify-content-center"
                        >
                            <h3 className="my-3 pri-font">Vinson Ong</h3>
                            <p className="sec-font mb-5">
                                <em>Associate Financial Consultant</em>
                            </p>
                            <h5 className="pri-font">
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum."
                            </h5>
                        </Col>
                    </Row>
                    <Row className="my-5 border-top border-bottom border-danger p-5">
                        <Col>
                            <h3 className="pri-font">Hear from his clients</h3>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="d-flex flex-column justify-content-center align-items-center p-5">
                            <h5>
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum."
                            </h5>
                            <p>
                                - Jason, Web Developer
                            </p>
                        </Col>
                        <Col>
                            <Image
                                src={require(`../static/img/${this.props.match.params.name}.jpg`)}
                                fluid
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Profile;
