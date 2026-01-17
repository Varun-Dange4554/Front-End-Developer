import { combineReducers,legacy_createStore } from 'redux'

import { myOwnReducer } from '../Reducer/Count/Reducer'
import { authReducer } from '../Reducer/Auth/Reducer'
import { todoReducer } from '../Reducer/Todos/Reducer'


const terminalReducer = combineReducers({
    todos:todoReducer,
    Counts:myOwnReducer,
    auths:authReducer,
    
})

export const myOwnStore = legacy_createStore(terminalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());






