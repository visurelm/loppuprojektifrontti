import React, {Component} from 'react';
import SumGame from '../games/sumgame/Sumgame';

class games extends Component {
    render() {
        return (
            <div>
                <button onClick={SumGame} className="button">Summapeli</button>
            </div>
        );
    }
}

export default games;