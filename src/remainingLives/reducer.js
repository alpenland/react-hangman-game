const initialState = {
    remainingLives: 7
}

export const livesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DECREMENT_LIFE':
            return {
                remainingLives: state.remainingLives - 1,
            }
        case 'SELECT_CATEGORY':
            return initialState
        case 'NEW_GAME':
            return initialState
        default:
            return state
    }
};

export default livesReducer;