import React from 'react'
import {Row, Col} from 'react-bootstrap';
import letterE from '../images/letterE.png';
import letterL from '../images/letterL.png';
import letterS from '../images/letterS.png';
import letterA from '../images/letterA.png';
import './Navcubes.css';


const Navcubes = () => (
    <div className="navcubes">
        <Row>
            <Col xs={3}><a href="/"><img src={letterE} alt="letterE"/></a></Col>
            <Col xs={3}><a href="/Logout"><img src={letterL} alt="letterL"/></a></Col>
            <Col xs={3}><a href="/users"><img src={letterS} alt="letterS"/></a></Col>
            <Col xs={3}><a href="/MyOwnPage"><img src={letterA} alt="letterA"/></a></Col>
        </Row>
    </div>
)

export default Navcubes;