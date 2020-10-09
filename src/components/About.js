import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleSpreadsheet } from "google-spreadsheet";

import ProfileCard from "./micro-components/ProfileCard";
import Header from "./micro-components/Header";
import Footer from "./micro-components/Footer";


class About extends React.Component {
    constructor() {
        super()
        this.state = {
            profiles: [],
        };
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

        this.setState({
            profiles: rows
        })
        console.log(this.state.profiles)
    };

    componentDidMount() {
        this.getPeople()
    }

    render() {
        return (
            <div>
                <Header position="sticky" bg="white" />
                <Container className="h-100 d-flex flex-column justify-content-center align-items-center pt-5">
                    <Row>
                        <h1 className="pri-font mb-5">Our Team</h1>
                    </Row>
                    <Row>
                        {this.state.profiles.map((profile) => (
                            <Col xs={12} md={6} lg={4} key={profile._rowNumber}>
                                <ProfileCard
                                    profile={profile}
                                    url={this.props.match.url}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default About;
