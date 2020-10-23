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
                    <Col>
                        <Form.Control
                            type="email"
                            name="_replyto"
                            placeholder="Email"
                        />
                    </Col>
                    <Col>
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
