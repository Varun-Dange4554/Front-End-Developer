import * as types from './Actions'

const initialValue = { todo:[] };


export const todoReducer = (state = initialValue,{ type,payload }) =>{
    switch (type){
        case types.ADDTODOS:{
            if(payload.trim() === ''){
                return state;
            } else {
                const todoValue = {
                    id:Date.now(),
                    text:payload,
                    isEdit:false,
                    isComplete:false,
                };
                return {
                    ...state,
                    todo:[...state,todoValue]
                };
            }
        }
        default:
            return state;
    }
}
