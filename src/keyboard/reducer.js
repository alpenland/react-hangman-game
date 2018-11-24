const initialState = {
    remainingLives: 7,
    validGuesses: [],
    winGame: false,
    alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    clickedLetters: []
}

export const keyboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VALID_GUESS':
            return {
                validGuesses: state.validGuesses.concat([action.letter]),
                remainingLives: state.remainingLives,
                winGame: state.winGame,
                alphabet: state.alphabet,
                clickedLetters: state.clickedLetters
            }
        case 'DECREMENT_LIFE':
            return {
                remainingLives: state.remainingLives - 1,
                validGuesses: state.validGuesses,
                winGame: state.winGame,
                alphabet: state.alphabet,
                clickedLetters: state.clickedLetters
            }
        case 'WIN_GAME':
            return {
                winGame: true,
                validGuesses: state.validGuesses,
                remainingLives: state.remainingLives,
                alphabet: state.alphabet,
                clickedLetters: state.clickedLetters
            }
        case 'CLICKED_LETTER':
            return {
                winGame: state.winGame,
                validGuesses: state.validGuesses,
                remainingLives: state.remainingLives,
                alphabet: state.alphabet,
                clickedLetters: state.clickedLetters.concat([action.letter])
            }
        case 'SELECT_CATEGORY':
            return initialState
        case 'NEW_GAME':
            return initialState
        default:
            return state
    }
};

export default keyboardReducer;




