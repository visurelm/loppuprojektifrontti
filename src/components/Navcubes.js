import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap';
import letterE from '../images/letterE.png';
import letterL from '../images/letterL.png';
import letterS from '../images/letterS.png';
import letterA from '../images/letterA.png';
import './Navcubes.css';

const Letters = () => {

}

class Navcubes extends Component {
    render() {
        return (
            <div className="navcontainer">
                <span className="navcubes"><img src={letterE} alt="letterE"/></span>
                <span className="navcubes"><img src={letterL} alt="letterL"/></span>
                <span className="navcubes"><img src={letterS} alt="letterS"/></span>
                <span className="navcubes"><img src={letterA} alt="letterA"/></span>
            </div>
        );
    }
}

export default Navcubes;