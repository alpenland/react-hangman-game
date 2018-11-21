import { SELECT_CATEGORY, DISABLE_BUTTON } from './actionTypes';

export const selectCategory = (value, i) => ({
    type: SELECT_CATEGORY,
    value,
    i
});

export const disableButton = (value) => ({
    type: DISABLE_BUTTON,
    value
});