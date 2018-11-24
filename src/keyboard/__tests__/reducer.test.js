import { decrementLife, validGuess, winGame, clickedLetter } from '../actions'
import { newGame } from '../../categories/actions';
import { letterReducer } from '../reducer';

const initialState = {
    validGuesses: [],
    remainingLives: 7,
    winGame: false,
    clickedLetters: []
}

it('should call decrementLife', () => {
    let state = initialState;
    let action = decrementLife();
    let result = letterReducer(state, action);
    expect(result.remainingLives).toBe(6);
});


it('should add valid guess to the validGuesses array', () => {
    let state = initialState;
    let letter = 'A';
    let action = validGuess(letter);
    let result = letterReducer(state, action);
    expect(result.validGuesses).toEqual(['A'])
});

it('should reset values to initial state when newGame is dispatched', () => {
    let state = {
        validGuesses: ['A','B'],
        remainingLives: 3,
        clickedLetters: ['A','P','B','R','E'],
        winGame: true
    };
    let action = newGame();
    let result = letterReducer(state,action);
    expect(result).toEqual({
        validGuesses: [],
        remainingLives: 7,
        clickedLetters: [],
        winGame: false
    })
});

it('should add clicked letters to the clickedLetters array', () => {
    let state = initialState;
    let letter = 'A';
    let action = clickedLetter(letter);
    let result = letterReducer(state, action);
    expect(result.clickedLetters).toEqual(['A'])
});

it('should dispatch winGame', () => {
    let state = initialState;
    let action = winGame();
    let result = letterReducer(state, action);
    expect(result.winGame).toBe(true)
});