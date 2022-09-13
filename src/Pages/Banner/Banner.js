import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Image/basil-blur-close-up-1437267.png';
import banner2 from '../../images/Image/burrito-chicken-close-up-461198.png';
import banner3 from '../../images/Image/eduardo-roda-lopes-198465-unsplash.png';

const Banner = () => {
    return (
        <div>
            <div className=' bg-primary d-block'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: '100%', height: '500px' }}
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Basil-blur-close-up</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            style={{ width: '100%', height: '500px' }}
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Burrito-chicken-close-up</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            style={{ width: '100%', height: '500px' }}
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Eduardo-roda-lopes</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;