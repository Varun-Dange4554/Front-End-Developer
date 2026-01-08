import { Route, Routes } from "react-router-dom";

import React from "react";

 
import {Home } from '../page/Home'
import {Todo } from '../page/Todo'
import { Signup } from '../page/Signup'
import { Login } from '../page/Login'
import { Counter } from '../components/counter'


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={ <Login/>}></Route>
            <Route path="/signup" element={< Signup/>}></Route>
            <Route path="/todo" element={<Todo/>}></Route>
            <Route path="/counter" element={< counter/>}></Route>
        </Routes>
    )
}