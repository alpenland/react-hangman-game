import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { decrementLife, validGuess, winGame, loseGame } from './actions';
import { incrementLossCounter, incrementWinCounter } from '../statusBar/actions';
//import { newGame } from '../categories/actions.js'

const KeyboardWrapper = styled.div`
    max-width: 60%;
    border-radius: 15%;
    margin: auto;
`

const Button = styled.button`
    width: 7.5%
    padding: 8px;
    border: 1px solid;
    border-radius: 5px;
    background-color: #1ebbd7
    color: white;

    &:disabled {
        background-color: #d2f1f7;
        color: #1ebbd7;
        border: white;
    }

    &:hover {
        background-color: #a5e3ef;
    }
`


class Keyboard extends React.Component {
    handleOnClick = ({currentTarget}) => {
        let letter = currentTarget.value;
        currentTarget.disabled = true;
        if (this.props.chosenWord.indexOf(letter) > -1) {
            this.props.validGuess(letter);
        } else {
            this.props.decrementLife();
        }
    };
    componentDidUpdate() {
        if (this.props.validGuesses.length > 0) {
            let checkWin = this.props.chosenWord.filter((letter) => !this.props.validGuesses.includes(letter));
            if (checkWin.length > 0) {} else {
                this.props.winGame();
                alert('you win!');
            }
        }
    };
    render() {
        return (
            <KeyboardWrapper>    
                {
                    this.props.alphabet.map((letter) => {
                        return (
                            <Button 
                                key={letter}
                                value={letter}
                                onClick={this.handleOnClick}
                                disabled={false}
                            >
                                {letter}
                            </Button>
                        )
                    })
                }
            </KeyboardWrapper>
        )    
    }
}

const mapStateToProps = (state) => ({
    chosenWord: state.category.chosenWord,
    remainingLives: state.keyboard.remainingLives,
    validGuesses: state.keyboard.validGuesses,
    alphabet: state.keyboard.alphabet,
    winGame: state.keyboard.winGame,
    loseGame: state.keyboard.loseGame
});


export default connect(mapStateToProps, { 
    decrementLife, 
    validGuess, 
    winGame, 
    loseGame, 
    incrementLossCounter, 
    incrementWinCounter 
})(Keyboard);
