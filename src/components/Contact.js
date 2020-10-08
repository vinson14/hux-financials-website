import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./micro-components/Header";
import ContactForm from "./micro-components/ContactForm";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header position="sticky" bg="white" />
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;
