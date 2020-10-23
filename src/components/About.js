import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tabletop from "tabletop";
import ProfileCard from "./micro-components/ProfileCard";
import Header from "./micro-components/Header";
import Footer from "./micro-components/Footer";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: [],

    };
  }

  getPeople = async() => {
      const doc = await Tabletop.init({
          key: "https://docs.google.com/spreadsheets/d/1pz8JCy_ZvHgik3fNElwTSFybFvX-Iw1iR2-2-Nz-uXE/edit?usp=sharing",
          simpleSheet: false
      })

      this.setState({
          profiles : doc.Agents.elements
      })

      console.log(doc.Agents.elements)
  }

  componentDidMount() {
    this.getPeople();
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
              <Col xs={12} md={6} lg={4} key={profile.row}>
                <ProfileCard profile={profile} url={this.props.match.url} />
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
