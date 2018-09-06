import React, {Component} from 'react';
import _ from 'lodash';
import '../../App.css';

const randomNumberBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

class Number extends React.PureComponent {
    handleClick = () => {
        if (this.props.clickable) {
            this.props.onClick(this.props.id);
        }
    };

    render() {
        return (
            <div
                className="number"
                style={{opacity: this.props.clickable ? 1 : 0.3}}
                onClick={this.handleClick}
            >
                {this.props.value}
            </div>
        );
    }
}

class Sumgame extends React.Component {
    static bgColors = {
        playing: '#6fe0c4',
        won: '#00772a',
        lost: 'red',
    };

    state = {
        gameStatus: 'new',
        remainingSeconds: this.props.initialSeconds,
        selectedIds: [],
        //tähän lisätään pelaaja
    };

    challengeNumbers = Array
        .from({length: this.props.challengeSize})
        .map(() => randomNumberBetween(...this.props.challengeRange));

    target = _.sampleSize(
        this.challengeNumbers,
        this.props.challengeSize - 2
    ).reduce((acc, curr) => acc + curr, 0);

    componentDidMount() {
        if (this.props.autoPlay) {
            this.startGame();
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    startGame = () => {
        this.setState({gameStatus: 'playing'}, () => {
            this.intervalId = setInterval(() => {
                this.setState((prevState) => {
                    const newRemainingSeconds = prevState.remainingSeconds - 1;
                    if (newRemainingSeconds === 0) {
                        clearInterval(this.intervalId);
                        return {gameStatus: 'lost', remainingSeconds: 0};
                    }
                    return {remainingSeconds: newRemainingSeconds};
                });
            }, 1000);
        });
    };

    isNumberAvailable = (numberIndex) =>
        this.state.selectedIds.indexOf(numberIndex) === -1;

    selectNumber = (numberIndex) => {
        if (this.state.gameStatus !== 'playing') {
            return;
        }
        this.setState(
            (prevState) => ({
                selectedIds: [...prevState.selectedIds, numberIndex],
                gameStatus: this.calcGameStatus([
                    ...prevState.selectedIds,
                    numberIndex,
                ]),
            }),
            () => {
                if (this.state.gameStatus !== 'playing') {
                    clearInterval(this.intervalId);
                }
            }
        );
    };

    calcGameStatus = (selectedIds) => {
        const sumSelected = selectedIds.reduce(
            (acc, curr) => acc + this.challengeNumbers[curr],
            0
        );
        if (sumSelected < this.target) {
            return 'playing';
        }
        console.log("Pelin propsit",this.props)
        if (sumSelected === this.target){this.props.addcompleted("Summapeli")}
        return sumSelected === this.target ? 'won' : 'lost';
        // return false;
        // sumSelected === this.target ? 'won' : 'lost';
        // console.log(sumSelected);
    };

    render() {
        const {gameStatus, remainingSeconds} = this.state;
        return (
            <div className="game">
                <div
                    className="target"
                    style={{backgroundColor: Sumgame.bgColors[gameStatus]}}
                >
                    {gameStatus === 'new' ? '?' : this.target}
                </div>
                <div className="challenge-numbers">
                    {this.challengeNumbers.map((value, index) => (
                        <Number
                            key={index}
                            id={index}
                            value={gameStatus === 'new' ? '?' : value}
                            clickable={this.isNumberAvailable(index)}
                            onClick={this.selectNumber}
                        />
                    ))}
                </div>
                <div className="play">
                    {gameStatus === 'new' ? (
                        <button onClick={this.startGame} className="playbuttons">Aloita</button>
                    ) : (
                        <div className="timer-value">Aikaa jäljellä: {remainingSeconds}</div>
                    )}
                    <div className="button" align-center="left">
                        {['won', 'lost'].includes(gameStatus) && (
                            <button onClick={this.props.onPlayAgain} left class="active" className="playbuttons">Pelaa uudestaan</button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {
    state = {
        gameId: 1,
    };

    resetGame = () =>
        this.setState((prevState) => ({
            gameId: prevState.gameId + 1,
        }));

    render() {
        return (
            <div class="popup">
                <Sumgame
                    key={this.state.gameId}
                    autoPlay={this.state.gameId > 1}
                    challengeSize={6}
                    challengeRange={[2, 9]}
                    initialSeconds={10}
                    onPlayAgain={this.resetGame}
                    addcompleted={this.props.addcompleted}
                />
            </div>
        );
    }
}

export default App;