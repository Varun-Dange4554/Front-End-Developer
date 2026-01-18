import { useDispatch, useSelector } from 'react-redux'
import { LoginsCompo } from '../components/Logins'
import { useNavigate } from 'react-router-dom'

import * as types from '../Reducer/Auth/Action'

export const Login = () => { 
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const { isLoading,isError}=useSelector((state)=> state.auths);

  const handlelogin = ({email,pass}) =>{
    if(email === 'admin' && pass === 'admin@123'){
      dispatch({type:types.LOGIN_SUCCESSFUL,payload:'fakeToken'})
    
            navigate('/todo');

         
    } 

     else {
      dispatch({type:types.LOGIN_FAILURE,payload:'wrong credentials'});
    }
  };
  if(isLoading) return <h1>Loading...</h1>
  return (
    <>
    <LoginsCompo props={ handlelogin }/>
    {isError && <h1>Something went Wrong...</h1>}
    </>
  );
}

