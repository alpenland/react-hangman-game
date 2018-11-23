import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { decrementLife, validGuess, winGame, loseGame, clickedLetter } from './actions';
import { incrementLossCounter, incrementWinCounter } from '../statusBar/actions';
import { Button } from '../button/Button';
import { KeyboardWrapper } from './KeyboardWrapper';

const LetterButton = styled(Button)`
    width: 7.5%;
    font-size: 0.9em;
`
const ClickedLetterButton = styled(Button)`
    width: 7.5%;
    font-size: 0.9em;
    background-color: #d2f1f7;
    color: #1ebbd7;
    border: white;
`
class Keyboard extends React.Component {
    handleOnClick = ({currentTarget}) => {
        let letter = currentTarget.value;
        this.props.clickedLetter(letter);
        if (this.props.chosenWord.indexOf(letter) > -1) {
            this.props.validGuess(letter);
        } else {
            this.props.decrementLife();
        }
    };
    componentDidUpdate() {
        if (this.props.remainingLives === 0) {
            this.props.incrementLossCounter();
        } else if (this.props.validGuesses.length > 0) {
            let checkWin = this.props.chosenWord.filter((letter) => !this.props.validGuesses.includes(letter));
            if (checkWin.length > 0) {} else {
                this.props.winGame();
                this.props.incrementWinCounter();
            }
        }
    };
    render() {
        return (
            <KeyboardWrapper>    
                {
                    this.props.alphabet.map((letter) => {
                        if (this.props.clickedLetters.indexOf(letter) > -1) {
                            return (
                                <ClickedLetterButton 
                                    key={letter}
                                    value={letter}
                                    onClick={this.handleOnClick}
                                >
                                    {letter}
                                </ClickedLetterButton>
                            )    
                        } else {
                            return (
                                <LetterButton 
                                    key={letter}
                                    value={letter}
                                    onClick={this.handleOnClick}
                                >
                                    {letter}
                                </LetterButton>
                            )    
                        }
                    })
                }
            </KeyboardWrapper>
        )    
    }
}

const mapStateToProps = (state) => ({
    chosenWord: state.category.chosenWord,
    validGuesses: state.keyboard.validGuesses,
    alphabet: state.keyboard.alphabet,
    clickedLetters: state.keyboard.clickedLetters,
    remainingLives: state.keyboard.remainingLives,
});

export default connect(mapStateToProps, { 
    decrementLife, 
    validGuess, 
    winGame, 
    loseGame,
    incrementWinCounter,
    incrementLossCounter,
    clickedLetter
})(Keyboard);