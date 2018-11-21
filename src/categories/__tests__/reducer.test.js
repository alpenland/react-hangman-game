import { selectCategory, newGame } from '../actions';
import categoryReducer from '../reducer';
import categoryData from '../../fixtures/categoryData';

it('should return chosenWord when selectCategory is called', () => {
    let state = categoryData;
    let title = 'countries';
    let i = 1
    let action = selectCategory(title, i);
    let result = categoryReducer(state, action);
    expect(result).toEqual({
        chosenWord: ['T','U','R','K','E','Y'],
        remainingLives: 7
    });
});

it('should reset values to begin new game', () => {
    let state = {
        chosenWord: ['C','A','N','A','D','A'],
        validGuesses: ['A','N','D','C'],
        remainingLives: 5
    };
    let action = newGame();
    let result = gameStatusReducer(state, action);
    expect(result).toEqual({
        chosenWord: [],
        remainingLives: 7
    });
});
