import React, {Component} from 'react';
import SumGame from '../games/sumgame/Sumgame';
import axios from "axios/index";

class games extends Component {

    render() {
        return (
            <div>
                <button onClick={SumGame} className="playbuttons">Summapeli</button>
                <button onClick={SumGame} className="playbuttons">Summapeli</button>
            </div>
        );
    }
}

export default games;