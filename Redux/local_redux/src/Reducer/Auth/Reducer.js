// import { isAction } from 'redux';
import * as types from './Action'

import { dataLoad,dataSave,removedata } from '../../LocalStorage/localeStorage'

const tokenKeys = 'token';

const tokenValue = localStorage.getItem('tokenKeys')

const initialvalue = {
    token: tokenValue || '',
    isAuth:tokenValue ? true : false,
    isError:null,
    isLoading:false,
};

export const authReducer = (state = initialvalue,action ) => {
    switch (action.type) {

        case types.REMOVE_TOKEN:{
            removedata(tokenKeys)
            return{
                ...state,
                token:'',
                isAuth:false,
            };
        }

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true,

            }
    
        case types.LOGIN_SUCCESSFUL: 
            
        
        dataSave(tokenKeys, action.payload)    
        return {
            ...state,
            isLoading:false,
            isAuth:true,
            token:action.payload,
            isError:null

         }
        
        

        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:action.payload,

            };

            default:
                return state;
        }
    }