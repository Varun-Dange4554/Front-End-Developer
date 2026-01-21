import React from "react"
import { useDispatch, useSelector } from "react-redux"

import axios from 'axios'
import * as  actFunc from '../Redux/action'


export const TodoInput = () => {
    const data = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const getApi = () => {
        axios
        .get('http://localhost:8080/todo')
        .then((res) => dispatch(actFunc.getTodoSuccess(res)))
        .catch((err) => console.log(err))
    }
    React.useEffect(()=>{
        getApi();

    },[])


  return (
    <div>TodoInput</div>
  )
}

