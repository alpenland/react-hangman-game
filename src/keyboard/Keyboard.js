import React from 'react';
import { connect } from 'react-redux';

import { LetterButton, ClickedLetterButton } from '../styledComponents/Button';
import { KeyboardWrapper } from '../styledComponents/KeyboardWrapper';

import { validGuess, winGame, clickedLetter } from './actions';
import { decrementLife } from '../remainingLives/actions'
import { incrementLossCounter, incrementWinCounter } from '../statusBar/actions';

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
    incrementWinCounter,
    incrementLossCounter,
    clickedLetter
})(Keyboard);