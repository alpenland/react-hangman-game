import { selectCategory } from '../actions';
import { newGame } from '../../remainingLives/actions;'

it('should setup SELECT_CATEGORY action', () => {
    let title = 'countries';
    let i = 3;
    let result = selectCategory(title, i);
    expect(selectCategory(title, i)).toEqual({
        type: 'SELECT_CATEGORY',
        title,
        i
    });
    expect(result.title).toBe('countries');
    expect(result.i).toBe(3);
});

it('should setup NEW_GAME action', () => {
    let action = newGame();
    expect(action).toEqual({
        type: 'NEW_GAME'
    })
});