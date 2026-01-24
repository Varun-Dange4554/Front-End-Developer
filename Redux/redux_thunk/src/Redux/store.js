import { legacy_createStore,applyMiddleware,compose } from "redux";

import { thunk } from 'redux-thunk'

import { todoReducers } from './reducers'

/*
const customMiddlewere = (store) => (next) => (action) => {
    return typeof action === 'function' ? action(store.dispatch) : next(action);
};

*/

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_COMPOSE__) || compose;

const enhancer = composeEnhancer(applyMiddleware(thunk));

export const myStore = legacy_createStore(todoReducers,
    // apply Middleware (customMiddlware),
    enhancer,
);