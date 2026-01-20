
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'


const getLogin = () =>{
    return { type:REMOVE_TOKEN }
};


const loginSuccessfull = (payload) => (dispatch) => {
    dispatch ({type: LOGIN_SUCCESSFUL, payload:payload})
};

const loginFailure = (payload) => (dispatch) => {
    dispatch( { type:LOGIN_FAILURE,payload:payload});
}
export { getLogin,loginSuccessfull,loginFailure }; 