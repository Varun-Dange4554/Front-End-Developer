import React from 'react'
import './App.css'
import { authInitialstate, authReducer } from './Auth/AuthReducer'
import { PrivateRoute } from './Auth/PrivateRoute';
import { Todo } from './Pages/Todo'

function App() {
  const [authstate, authDispatch]= React.useReducer(
    authReducer,
    authInitialstate
  );


  return (
    <>
    <PrivateRoute
    isAuth={authstate.isAuth}
    authDispatch={authDispatch}>
     <Todo />
     </PrivateRoute>
       {/* <Todo /> */}
    </>
  )
}

export default App
