import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./micro-components/Header";
import ContactForm from "./micro-components/ContactForm";
import "../static/css/contact.css";

class Contact extends React.Component {
    render() {
        return (
            <div className="h-100 contact-background">
                <Header position="sticky" bg="white" />
                <Container >
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
