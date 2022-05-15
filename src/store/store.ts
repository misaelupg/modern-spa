import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { auth } from './reducers/auth-reducer';
import { notes } from './reducers/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    combineReducers({
        // auth,
        notes,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
);
