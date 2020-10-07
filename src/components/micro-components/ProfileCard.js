import React from "react";
import { Card, Button } from "react-bootstrap";

class ProfileCard extends React.Component {
    render() {
        return (
            <Card className="border-0">
                <Card.Img
                    src={require(`../../static/img/${this.props.profile.name}.jpg`)}
                />
                <Card.Body>
                    <Card.Title>{this.props.profile.name}</Card.Title>
                    <Card.Text>Associate Financial Consultant</Card.Text>
                    <Button href={`${this.props.url}/${this.props.profile.name}`}>See More</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default ProfileCard;
