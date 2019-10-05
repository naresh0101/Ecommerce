import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Carousel className="text-white">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i01.appmifile.com/webfile/globalimg/in/cms/8FFB6F75-81E3-DE0B-7D60-C9C7296FAEEB.jpg"
                    alt="Third slide" height="550px;"
                    />

                    <Carousel.Caption>
                    <h3>Redmi india's best product</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.apple.com/v/iphone/home/ab/images/overview/hero/hero_iphone11_pro__je9i781j99u2_large.jpg"
                    alt="First slide" height="550px;"
                    />
                    <Carousel.Caption>
                    <h3>Follow Apple</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i01.appmifile.com/webfile/globalimg/in/cms/B1DCD0D0-F672-E862-8574-4BC5C76D3994.jpg"
                    alt="Third slide" height="550px;"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
         );
    }
}
 
export default Header;