import { createStore, combineReducers } from 'redux';

import categoryReducer from '../categories/reducer';
import gameStatusReducer from '../statusBar/reducer';
import keyboardReducer from '../keyboard/reducer';
import livesReducer from '../remainingLives/reducer'

export default () => {
    const store = createStore(
        combineReducers({
            category: categoryReducer,
            status: gameStatusReducer,
            keyboard: keyboardReducer,
            lives: livesReducer 
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        
    );

    return store;
};
