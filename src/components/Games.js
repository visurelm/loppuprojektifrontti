import React, {Component} from 'react';
import Memo from '../images/memory.svg';
import Sum from '../images/sudoku.svg';

class games extends Component {
    render() {
        return (
            <div>
                <div>
                <a href="http://memogame.s3-website-eu-west-1.amazonaws.com"><img src={Memo} className="playbuttons"/></a>
                <br/>Muistipeli</div>
                <div>
                    <a href="/games/sumgame"><img src={Sum} className="playbuttons"/></a>
                    <br/>Summapeli
                </div>
                    {/*<button onClick={SumGame} className="playbuttons">Summapeli</button>*/}
                {/*<button onClick={SumGame} className="playbuttons">Summapeli</button>*/}
            </div>
        );
    }
}
export default games;