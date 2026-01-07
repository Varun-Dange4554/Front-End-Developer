import * as types from './Actions'

const initialValue = { todo: [ ] };


export const todoReducer = (state = initialValue,{ type, payload }) =>{
    switch ( type ){
        case types.ADDTODOS:{
            if(payload.trim() === ''){
                return state;
            } else {
                const todoValue = {
                    id:Date.now(),
                    text:payload,
                    isEdit:false,
                    isComplete:false
                };
                return {
                    ...state,
                    todo: [...state.todo, todoValue]
                };
            }
        }


        case types.DELETETODOS:{
            return {
                ...state,
                todo: state.todo.filter((el)=> el.id !== payload)
            }
        }
      
             






        default:
            return state;
    }
}
