import React from 'react'
import letterE from '../images/letterE.png';
import letterL from '../images/letterL.png';
import letterS from '../images/letterS.png';
import letterA from '../images/letterA.png';
import './Navcubes.css';

const imgScaling = {
    width: 'auto',
    height: 'auto',
};

const Navcubes = () => (
    <div style = {imgScaling}>
        <a href="/"><img src={letterE} alt="letterE" /></a>
        <a href="/Logout"><img src={letterL} alt="letterL" /></a>
        <a href="/users"><img src={letterS} alt="letterS" /></a>
        <a href="/MyOwnPage"><img src={letterA} alt="letterA" /></a>
        {/*<img src={letterE} alt="letterE"/>*/}
        {/*<img src={letterL} alt="letterL"/>*/}
        {/*<img src={letterS} alt="letterS"/>*/}
        {/*<img src={letterA} alt="letterA"/>*/}
    </div>
)

export default Navcubes;