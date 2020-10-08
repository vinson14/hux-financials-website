import React from 'react'

import Header from './micro-components/Header';
import Footer from './micro-components/Footer';

class Testimonial extends React.Component {

    render() {
        return(
            <div>
                <Header position="sticky" bg="white" />
                <h1> Testimonials </h1>
                <Footer />
            </div>
        )
    }
}

export default Testimonial