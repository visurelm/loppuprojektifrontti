import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import Elmo from './Elmo';
import Jouni from './Jouni';
import Reija from './Reija';
import Miika from './Miika';
class backgroundcarousel extends Component{

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <Jouni/>
                        {/*<img width={150} height={150} alt="Girl" src={Girl} className="carouselimg"/>*/}
                        <Carousel.Caption>
                            {/*<h3>Elmo</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Elmo/>
                        {/*<img width={150} height={150} alt="Teacher" src={Teacher} className="carouselimg"/>*/}
                        <Carousel.Caption>
                            {/*<h3>on</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reija/>
                        {/*<img width={150} height={150} alt="School" src={School} className="carouselimg"/>*/}
                        <Carousel.Caption>
                            {/*<h4></h4>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Miika/>
                        {/*<img width={150} height={150} alt="School" src={School} className="carouselimg"/>*/}
                        <Carousel.Caption>
                            {/*<h4></h4>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            </div>
        );
    }
}

export default backgroundcarousel;