import * as types from'../Count/Action'

const initialValue = { count:0 }

export const myOwnReducer=(state = initialValue,{type, payload}) =>{
    switch(type){
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        
         case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1.
            };
            case types.INCREMENT_BY_VALUE:
                return {
                    ...state,
                    count:state.count+payload,
                }
        
    

            default:
                return state;
    }
}