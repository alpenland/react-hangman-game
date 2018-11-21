import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import categoryReducer from '../categories/reducer';
import gameStatusReducer from '../statusBar/reducer';
import keyboardReducer from '../keyboard/reducer';

export default () => {
    const store = createStore(
        combineReducers({
            category: categoryReducer,
            status: gameStatusReducer,
            keyboard: keyboardReducer 
        }),
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        
    );

    return store;
};
