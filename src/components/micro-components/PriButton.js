import React from 'react'
import {Button} from "react-bootstrap";

import "../../static/css/pributton.css"

class PriButton extends React.Component {

    render() {
        return(
            <Button variant="outline-light" className="h5 px-3 py-2 m-3 pri-font" href="#">
                {this.props.data.text}
            </Button>
        )
    }
}

export default PriButton