import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PriButton from "./micro-components/PriButton";
import "../static/css/landingpage.css";

const data = {
    text: "Find Out More",
};

class LandingPage extends React.Component {
    render() {
        return (
            <Container
                fluid
                className="h-100 home-background d-flex align-items-center justify-content-center"
            >
                <Row>
                    <Col className="p-5">
                        <div id="landing-page-caption" className="p-5">
                            <h1 className="pri-font font-weight-bold">Life is an uphill battle</h1>
                            <h4 className="sec-font">Start your climb with us today</h4>
                            <PriButton data={data} />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LandingPage;
