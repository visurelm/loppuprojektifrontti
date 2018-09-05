import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import E from '../images/letterE.png';
import L from '../images/letterL.png';
import S from '../images/letterS.png';
import A from '../images/letterA.png';

class HomeBodyCarouselCubes extends Component{

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={100} height={100} alt="E" src={E} />
                        <Carousel.Caption>
                            {/*<h3>Elmo</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={100} height={100} alt="L" src={L} />
                        <Carousel.Caption>
                            {/*<h3>on</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={100} height={100} alt="S" src={S} />
                        <Carousel.Caption>
                            {/*<h3>PARAS</h3>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={100} height={100} alt="A" src={A} />
                        <Carousel.Caption>
                            <h3>JEEJEE</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            </div>
        );
    }
}

export default HomeBodyCarouselCubes;