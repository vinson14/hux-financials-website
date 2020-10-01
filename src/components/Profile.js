import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Profile extends React.Component {
    render() {
        return (
            <Container className="h-100 d-flex justify-content-center align-items-center">
                <Row>
                    <Col md={6} className="p-5">
                        <Image
                            src={require(`../static/img/${this.props.match.params.name}.jpg`)}
                            fluid
                        />
                    </Col>
                    <Col md={6} className="p-5 align-items-center d-flex">
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;
