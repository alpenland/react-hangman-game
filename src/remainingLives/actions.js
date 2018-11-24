import { DECREMENT_LIFE, NEW_GAME } from './actionTypes';

export const newGame = () => ({
    type: NEW_GAME
});

export const decrementLife = () => ({
    type: DECREMENT_LIFE
});
