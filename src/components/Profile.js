import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tabletop from "tabletop";

import Header from "./micro-components/Header";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            person: {},
            testimonials: [],
        };
    }

    getPeople = async () => {
        const doc = await Tabletop.init({
            key:
                "https://docs.google.com/spreadsheets/d/1pz8JCy_ZvHgik3fNElwTSFybFvX-Iw1iR2-2-Nz-uXE/edit?usp=sharing",
            simpleSheet: false,
        });

        this.setState({
            isLoaded: true,
            person: doc.Agents.elements.find(p => p.link === this.props.match.params.name),
            testimonials: doc.Testimonials.elements.filter(
                t => t.link === this.props.match.params.name
            ),
        });

        console.log(doc.Agents.elements);
    };

    componentDidMount() {
        this.getPeople();
    }

    render() {
        if (!this.state.isLoaded) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div>
                    <Header position="sticky" bg="white" />
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Image
                                    src={require(`../static/img/${this.state.person.img}`)}
                                    fluid
                                />
                            </Col>
                            <Col
                                md={6}
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <h3>{this.state.person.name}</h3>
                                <p>
                                    <em>{this.state.person.title}</em>
                                </p>
                                <h5>{this.state.person.profile}</h5>
                            </Col>
                        </Row>
                        {this.state.testimonials.map((testimonial) => (
                            <Row key={testimonial._rowNumber}>
                                <Col
                                    md={6}
                                    className="d-flex flex-column justify-content-center align-items-center"
                                >
                                    <h5>{testimonial.testimonial}</h5>
                                    <p>
                                        <em>{testimonial.client}</em>
                                    </p>
                                </Col>
                                <Col md={6}>
                                    <Image
                                        src={require(`../static/img/${testimonial.img}`)}
                                        fluid
                                    />
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </div>
            );
        }
    }
}

export default Profile;
