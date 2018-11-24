import { VALID_GUESS, WIN_GAME, CLICKED_LETTER } from './actionTypes';

export const validGuess = (letter) => ({
    type: VALID_GUESS,
    letter
});

export const winGame = () => ({
    type: WIN_GAME
});

export const clickedLetter = (letter) => ({
    type: CLICKED_LETTER,
    letter
});