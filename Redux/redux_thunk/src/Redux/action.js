import * as types from '../Redux/actionTypes';
import axios from 'axios';


const getTodosRequest =() => {
    return {type: types.GET_TODOS_SUCCESS}
}

const getTodosFailure = (payload) => {
    return { type:types.GET_TODOS_SUCCESS,payload}
} 
const getTodoSuccess = (payload) => {
    return { type:types.GET_TODOS_SUCCESS,payload}
}

const getApi = (dispatch) =>{
    dispatch(getTodosRequest);
    axios 
    .get('http://localhost:8080/todo')
    .then((res) => dispatch(getTodoSuccess(res.data)))
    .catch((err)=>{
        dispatch(getTodoSuccess);
        console.error(err)
    });
}






const addTodosRequest =() => {
    return {type: types.ADD_TODOS_SUCCESS}
}

const addTodosFailure = (payload) => {
    return { type:types.ADD_TODOS_SUCCESS,payload}
} 
const addTodoSuccess = (payload) => {
    return { type:types.ADD_TODOS_SUCCESS,payload}
}
export {
    getTodoSuccess,
    getTodosFailure,
    getTodosRequest,
    getApi,
    addTodoSuccess,
    addTodosFailure,
    addTodosRequest
}