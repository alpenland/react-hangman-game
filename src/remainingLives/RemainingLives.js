import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import start from '../images/start.png';
import oneWrong from '../images/one-wrong.png';
import twoWrong from '../images/two-wrong.png';
import threeWrong from '../images/three-wrong.png';
import fourWrong from '../images/four-wrong.png';
import fiveWrong from '../images/five-wrong.png';
import sixWrong from '../images/six-wrong.png';
import lose from '../images/you-lose.png';
import win from '../images/you-win2.png';

import { newGame } from './actions';
import { Button } from '../button/Button'

const NewGameButton = styled(Button)`
    background-color: #FFA500;
    margin-bottom: 3%;

    &:hover {
        background-color: #FFC04C;
    }
`

class RemainingLives extends React.Component {
    render () {
        if (this.props.winGame === true) {
            return (
                <div>
                    <img src={win} alt="you win"/><br />
                    <NewGameButton onClick={this.props.newGame}>Play Again</NewGameButton>
                </div>
            )
        } else if (this.props.remainingLives === 7) {
            return (<img src={start} alt="7 lives left"/>)
        } else if (this.props.remainingLives === 6) {
            return (<img src={oneWrong} alt="6 lives left"/>)
        } else if (this.props.remainingLives === 5) {
            return (<img src={twoWrong} alt="5 lives left"/>)
        } else if (this.props.remainingLives === 4) {
            return (<img src={threeWrong} alt="4 lives left"/>)
        } else if (this.props.remainingLives === 3) {
            return (<img src={fourWrong} alt="3 lives left"/>)
        } else if (this.props.remainingLives === 2) {
            return (<img src={fiveWrong} alt="2 lives left"/>)
        } else if (this.props.remainingLives === 1) {
            return (<img src={sixWrong} alt="1 life left"/>)
        } else if (this.props.remainingLives === 0) {
            return (
                <div>
                    <img src={lose} alt="you lose"/><br />
                    <NewGameButton onClick={this.props.newGame}>Play Again</NewGameButton>
                </div>
            )
        } 
    }
}

const mapStateToProps = (state) => ({
    remainingLives: state.lives.remainingLives,
    winGame: state.keyboard.winGame
});

export default connect(mapStateToProps, {newGame})(RemainingLives);
