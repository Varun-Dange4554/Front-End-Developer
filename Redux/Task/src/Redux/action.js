import { FETCH_START,FETCH_ERROR,FETCH_SUCCESS } from "./actionTypes";

export const fetchStart = () => ({
    type:FETCH_START
})

export const fetchSuccess = (payload) => ({
    type: FETCH_SUCCESS,
    payload,
})

export const fetchError = (payload) => ({
    type:FETCH_ERROR,
    payload,
})