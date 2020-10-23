import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

class ContactForm extends React.Component {
    render() {
        return (
            <Form action="https://formspree.io/f/xaylollw" method="POST">
                <Row>
                    <Col xs={6} md={4}>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Form.Control
                            type="number"
                            name="mobile"
                            placeholder="Mobile No."
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Form.Control
                            as="textarea"
                            name="email"
                            placeholder="Message"
                            rows={20}
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default ContactForm;
