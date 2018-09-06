import React, {Component} from "react";
import '../App.css';
import Carousel from './HomeBodyCarousel';
import CarouselCubes from './HomeBodyCarouselCubes';
import StoryOfElsa from './StoryOfElsa';
import Elsafooter from './elsafooter'


class HomeBody extends Component {
    render() {
        return (
            <div>
                <body>
                <div className="container-fluid text-center">
                    <div className="row content">
                        {/*<div className="col-sm-2 sidenav">*/}
                            {/*<CarouselCubes/>*/}
                        {/*</div>*/}
                        <div className="col-sm-8 text-left">
                            <h1 align="center">Tervetuloa!</h1>
                            <StoryOfElsa/>
                        </div>
                        {/*<div className="col-sm-2 sidenav">*/}
                            {/*<Carousel/>*/}
                        {/*</div>*/}
                    </div>
                </div>
                </body>
            </div>
        );
    }
}

export default HomeBody;