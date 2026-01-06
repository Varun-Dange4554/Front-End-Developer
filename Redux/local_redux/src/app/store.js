import { legacy_createStore } from 'redux'

// import { myOwnReducer } from '../Reducer/Count/Reducer'
import { todoReducer } from '../Reducer/Todos/Reducer'

export const myOwnStore = legacy_createStore( todoReducer );