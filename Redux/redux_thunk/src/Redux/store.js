import { legacy_createStore } from "redux";

import { todoReducers } from './reducers'

export const myStore = legacy_createStore(todoReducers);