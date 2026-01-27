import { legacy_createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { apiReducer } from "./reducers"

export const myStore = legacy_createStore(
  apiReducer,
  applyMiddleware(thunk)
)
