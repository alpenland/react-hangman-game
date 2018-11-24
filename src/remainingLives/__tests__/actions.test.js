import { newGame, decrementLife } from '../actions';

it('should setup NEW_GAME action', () => {
    let action = newGame();
    expect(action).toEqual({
        type: 'NEW_GAME'
    })
});

it('should setup DECREMENT_LIFE action', () => {
    let action = decrementLife();
    expect(action).toEqual({
        type: 'DECREMENT_LIFE'
    })
});
