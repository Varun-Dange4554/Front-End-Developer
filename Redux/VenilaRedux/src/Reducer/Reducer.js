import * as types from './Action'

const initialState = { count:0 };

export const CounterReducer = (state = initialState,action)=>{
    switch(action.type){
        case types.INCREMENT:
            return{
                ...state,
                count:state.count + 1,
            };
             
            case types.DECREMENT:
            return{
                ...state,
                count:state.count - 1,
            };
            default:
                return state;
    }
}