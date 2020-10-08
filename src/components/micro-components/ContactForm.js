import React from "react";
import { Form, Row, Col } from "react-bootstrap";

class ContactForm extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                    <Col xs={6} md={4}>
                        <Form.Control type="text" placeholder="Name*" />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Mobile Number" />
                    </Col>
                    <Col>
                        <Form.Control type="email" placeholder="E-mail" />
                    </Col>
                    <Col>
                        <Form.Control as="textarea" type="text" placeholder="Message" />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default ContactForm;
