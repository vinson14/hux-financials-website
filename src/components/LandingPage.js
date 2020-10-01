import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import "../static/css/homecontent.css"

class LandingPage extends React.Component {

    render () {
        return (
            <Container fluid className="h-100 home-background d-flex align-items-center justify-content-center">
                <Row>
                    <Col className="p-5" id="landing-page-caption">
                        <h1>Life is a constant uphill battle</h1>
                        <h2>Start your climb with us today</h2>
                        <Button>Find out more</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LandingPage