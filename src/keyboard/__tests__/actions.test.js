import { decrementLife, validGuess } from '../actions';

it('should setup DECREMENT_LIFE action correctly', () => {
    let result = decrementLife();
    expect(result).toEqual({
        type: 'DECREMENT_LIFE'
    });
});

it('should setup VALID_GUESS action correctly', () => {
    let letter = 'R';
    let result = validGuess(letter);
    expect(result).toEqual({
        type: 'VALID_GUESS',
        letter
    });
    expect(result.letter).toBe('R');
});
