import * as types from'./Action'

const initialValue = {
     count:0,
     todos:[] 
    }

export const myOwnReducer=(state = initialValue,{type, payload}) =>{
    switch(type){
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        
         case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
            
         case types.ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,payload]
            };    

         case types.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== payload)
            }   
    




            default:
                return state;
    }
}