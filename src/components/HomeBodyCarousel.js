import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import Teacher from '../images/teacher.svg';
import School from '../images/school.svg';
import Girl from '../images/girl.svg';

class HomeBodyCarousel extends Component{

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={150} height={150} alt="Girl" src={Girl} className="carouselimg"/>
                        <Carousel.Caption>
                            {/*<h3>Elmo</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={150} height={150} alt="Teacher" src={Teacher} className="carouselimg"/>
                        <Carousel.Caption>
                            {/*<h3>on</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={150} height={150} alt="School" src={School} className="carouselimg"/>
                        <Carousel.Caption>
                            {/*<h4></h4>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            </div>
        );
    }
}

export default HomeBodyCarousel;