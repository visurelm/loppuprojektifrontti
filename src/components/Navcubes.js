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
            <Col sm={3}><a href="/"><img src={letterE} alt="letterE"/></a></Col>
            <Col sm={3}><a href="/Logout"><img src={letterL} alt="letterL"/></a></Col>
            <Col sm={3}><a href="/users"><img src={letterS} alt="letterS"/></a></Col>
            <Col sm={3}><a href="/MyOwnPage"><img src={letterA} alt="letterA"/></a></Col>
        </Row> {/*<img src={letterE} alt="letterE"/>*/}
        {/*<img src={letterL} alt="letterL"/>*/}
        {/*<img src={letterS} alt="letterS"/>*/}
        {/*<img src={letterA} alt="letterA"/>*/}
    </div>
)

export default Navcubes;