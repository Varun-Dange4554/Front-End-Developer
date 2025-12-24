export const authInitialstate ={
    isAuth:
    localStorage.getItem("isAuth") === "true" ||
    localStorage.getItem("isAuth") === true,
};

export const authReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            localStorage.setItem("isAuth","true");
            return {isAuth:true}

            case "LOGOUT":
                localStorage.removeItem("isAuth");
                return {isAuth:false};
                default:return state;
    }
}