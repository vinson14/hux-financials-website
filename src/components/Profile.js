import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { GoogleSpreadsheet } from "google-spreadsheet";

import Header from "./micro-components/Header";

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            person: {},
            testimonials: []
        }
    }

    getPeople = async () => {
        const doc = new GoogleSpreadsheet(
            process.env.REACT_APP_GOOGLE_SPREADSHEET_ID
        );
        await doc.useServiceAccountAuth({
            private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
            client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
        });

        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();

        const testimonials_sheet = doc.sheetsByIndex[1];
        const testimonials_rows = await testimonials_sheet.getRows();

        this.setState({
            isLoaded: true,
            person: rows.find(p => p.link === this.props.match.params.name),
            testimonials: testimonials_rows.filter(t => t.link === this.props.match.params.name)
        })
    };

    componentDidMount() {
        this.getPeople()
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <div>
                    <Header position="sticky" bg="white" />
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Image src={require(`../static/img/${this.state.person.img}`)} fluid />
                            </Col>
                            <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                                <h3>{this.state.person.name}</h3>
                                <p><em>{this.state.person.title}</em></p>
                                <h5>{this.state.person.profile}</h5>
                            </Col>
                        </Row>
                        {this.state.testimonials.map(testimonial => (
                            <Row key={testimonial._rowNumber}>
                                <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                                   <h5>{testimonial.testimonial}</h5>
                                   <p><em>{testimonial.client}</em></p>
                                </Col>
                                <Col md={6}>
                                    <Image src={require(`../static/img/${testimonial.img}`)} fluid />
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </div>
            )
        }
    }
}

export default Profile;
