import React from "react";
import { Card } from "react-bootstrap";
import SecButton from "./SecButton";


class ProfileCard extends React.Component {
    render() {

        const button_data = {
            text: "See more",
            href: `${this.props.url}/${this.props.profile.name}`
        }

        return (
            <Card className="border-0 my-3">
                <Card.Img
                    src={require(`../../static/img/${this.props.profile.name}.jpg`)}
                />
                <Card.Body>
                    <Card.Title className="pri-font font-weight-bold">{this.props.profile.name}</Card.Title>
                    <Card.Text className="sec-font">Associate Financial Consultant</Card.Text>
                    <SecButton data={button_data} />
                </Card.Body>
            </Card>
        );
    }
}

export default ProfileCard;
