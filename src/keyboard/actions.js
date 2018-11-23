import { DECREMENT_LIFE, VALID_GUESS, WIN_GAME, LOSE_GAME, CLICKED_LETTER } from './actionTypes';

export const decrementLife = () => ({
    type: DECREMENT_LIFE
});

export const validGuess = (letter) => ({
    type: VALID_GUESS,
    letter
});

export const winGame = () => ({
    type: WIN_GAME
});

export const loseGame = () => ({
    type: LOSE_GAME
});

export const clickedLetter = (letter) => ({
    type: CLICKED_LETTER,
    letter
});