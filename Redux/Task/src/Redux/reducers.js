import * as types from './actionTypes'
const initialState = {
    data:[]
    loading:false,
    error:null,
    
}


export const apiReducer = (state = initialState,action) => {
    switch (action.types){
        case.types.FETCH_START:
        return{...state, loading:true,error:null}


          case.types.FETCH_SUCCESS:
        return{...state, loading:false,data:action.payload}


          case.types.FETCH_ERROR:
        return{...state, loading:false,error:action.payload}

        default:
             return state
    }
}