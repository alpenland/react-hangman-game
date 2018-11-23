import { SELECT_CATEGORY } from './actionTypes';

export const selectCategory = (value, i) => ({
    type: SELECT_CATEGORY,
    value,
    i
});