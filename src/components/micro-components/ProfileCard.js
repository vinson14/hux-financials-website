import React from "react";
import { Card } from "react-bootstrap";
import SecButton from "./SecButton";


class ProfileCard extends React.Component {
    render() {

        const button_data = {
            text: "See more",
            href: `/about/${this.props.profile.link}`
        }
        return (
            <Card className="border-0 my-3">
                <Card.Img
                    src={require(`../../static/img/${this.props.profile.img}`)}
                />
                <Card.Body>
                    <Card.Title className="pri-font font-weight-bold">{this.props.profile.name}</Card.Title>
                    <Card.Text className="sec-font">{this.props.profile.title}</Card.Text>
                    <SecButton data={button_data} />
                </Card.Body>
            </Card>
        );
    }
}

export default ProfileCard;
