import React from 'react'
import { Link } from 'react-router-dom';

import "../../static/css/secbutton.css"

class SecButton extends React.Component {

    render() {
        return(
           // <Button href={this.props.data.href} variant="outline-dark" className="h5 px-3 py-2 m-3 pri-font">
            //    {this.props.data.text}
            //</Button>
            <Link to={this.props.data.href} type="button" className="btn btn-outline-dark">See More</Link>
        )
    }
}

export default SecButton