import React from 'react'
import {Button} from "react-bootstrap";

import "../../static/css/pributton.css"

class SecButton extends React.Component {

    render() {
        console.log(this.props.data)
        return(
            <Button href={this.props.data.href} variant="outline-dark" className="h5 px-3 py-2 m-3 pri-font">
                {this.props.data.text}
            </Button>
        )
    }
}

export default SecButton