import * as types from '../Redux/actionTypes';


const getTodosRequest =(payload) => {
    return {type: types.GET_TODOS_REQUEST,payload}
}

const getTodosFailure = (payload) => {
    return { type:types.GET_TODOS_FAILURE,payload}
} 
const getTodoSuccess = (payload) => {
    return { type:types.GET_TODOS_SUCCESS,payload}
}

export {getTodoSuccess,getTodosFailure,getTodosRequest}