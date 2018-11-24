import { decrementLife, validGuess, clickedLetter, winGame } from '../actions';

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

it('should setup CLICKED_LETTER action correctly', () => {
    let letter = 'A';
    let result = clickedLetter(letter);
    expect(result).toEqual({
        type: 'CLICKED_LETTER',
        letter
    });
    expect(result.letter).toBe('A')
});

it('should setup WIN_GAME action correctly', () => {
    let result = winGame();
    expect(result).toEqual({
        type: 'WIN_GAME'
    });
});