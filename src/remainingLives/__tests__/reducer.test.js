import { newGame, decrementLife } from '../actions';
import { selectCategory } from '../../categories/actions';
import livesReducer from '../reducer';

const initialState = {
    remainingLives: 7
};

it('should execute newGame action when called', () => {
    let state = {
        remainingLives: 5
    };
    let action = newGame();
    let result = livesReducer(state, action);
    expect(result).toEqual({
        remainingLives: 7
    });
});

it('should execute selectCategory action when called', () => {
    let state = {
        remainingLives: 5
    };
    let action = selectCategory();
    let result = livesReducer(state, action);
    expect(result).toEqual({
        remainingLives: 7
    });
});

it('should execute decrementLife action when called', () => {
    let state = {
        remainingLives: 5
    };
    let action = decrementLife();
    let result = livesReducer(state, action);
    expect(result).toEqual({
        remainingLives: 4
    });
});