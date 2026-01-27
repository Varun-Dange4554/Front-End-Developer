import { legacy_createStore } from 'redux';

import { apiReducer } from '../Redux/reducers'


export const myStore = legacy_createStore(apiReducer);