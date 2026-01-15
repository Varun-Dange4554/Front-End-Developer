import { isAction } from 'redux';
import * as types from './Action'

const tokenValue = localStorage.getItem('token')

const initialvalue = {
    token:tokenValue || '',
    isAuth:tokenValue ? true : false,
    isError:null,
    isLoading:false,
};

export const authReducer = (state = initialvalue,action ) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
    
        case types.LOGIN_SUCCESSFULL: {
            if( !action.payload) return state;
        
        localStorage.setItem('token', action.payload);
    
        return {
            ...state,
            isLoading:false,
            isAuth:true,
            token:action.payload,
         }
        }

        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:action.payload
            };

            default:
                return state;
        }
    }