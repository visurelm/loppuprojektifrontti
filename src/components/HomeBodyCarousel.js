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
                        <img width={100} height={100} alt="Girl" src={Girl} />
                        <Carousel.Caption>
                            {/*<h3>Elmo</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={100} height={100} alt="Teacher" src={Teacher} />
                        <Carousel.Caption>
                            {/*<h3>on</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={100} height={100} alt="School" src={School} />
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