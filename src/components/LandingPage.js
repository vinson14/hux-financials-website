import React from 'react'
import * as BS from "react-bootstrap";
import "../static/css/homecontent.css"

class LandingPage extends React.Component {

    render () {
        return (
            <BS.Container fluid className="h-100 home-background d-flex align-items-center justify-content-center">
                <BS.Row>
                    <BS.Col className="p-5" id="landing-page-caption">
                        <h1>Life is a constant uphill battle</h1>
                        <h2>Start your climb with us today</h2>
                    </BS.Col>
                </BS.Row>
            </BS.Container>
        )
    }
}

export default LandingPage