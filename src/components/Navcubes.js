import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap';
import letterE from '../images/letterE.png';
import letterL from '../images/letterL.png';
import letterS from '../images/letterS.png';
import letterA from '../images/letterA.png';
import '../css/navcubes.css';

const Letters = () => {

}

class Navcubes extends Component {
    render() {
        return (
            <div className="navcontainer">
                <img src={letterE} alt="letterE" className="navcubes"/>
                <img src={letterL} alt="letterL" className="navcubes"/>
                <img src={letterS} alt="letterS" className="navcubes"/>
                <img src={letterA} alt="letterA"className="navcubes"/>
            </div>
        );
    }
}

export default Navcubes;