import { useDispatch, useSelector } from 'react-redux'
import { LoginsCompo } from '../components/Logins'
import { useNavigate } from 'react-router-dom'

// import * as types from '../Reducer/Auth/Action'

import { loginSuccessfull,loginFailure} from '../Reducer/Auth/Action'

export const Login = () => { 
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const { isLoading,isError}=useSelector((state)=> state.auths);

  const handlelogin = ({email,pass}) =>{
    if(email === 'admin' && pass === 'admin@123'){
      dispatch(loginSuccessfull('fakeToken_varun'));
    
            navigate('/todo');         
    } 

     else {
      dispatch(loginFailure('wrong_credential'));
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

