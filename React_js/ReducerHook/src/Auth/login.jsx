import React,{ useState } from "react";

export const Login = ({ dispatch}) => {
    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    const [error,setError]=useState("");

    const handleLogin = () =>{
        if(!email || password.length < 6){
            setError("Email required & password min 6 charcters");
            return;
        }
        dispatch({type:"LOGIN_SUCCESS"})
    };
    return(
        <div style={{width:"320",margin:"120px auto"}}>
            <h2>Login</h2>
            <input type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            style={{width:"100%",marginBottom:"10px"}}
             />
           <input type="password"
           placeholder="password"
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
           style={{ width:"100%", marginBottom:"10px"}} 
           />

           {error && <p style={{ color:"red"}}> {error}</p>}
           <button onClick={handleLogin} style={{width:"100%"}}>
            Login
           </button>

        </div>
    )
}