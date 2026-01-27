import React from 'react'
import axios from 'axios'

import {ContextCreate } from '../Context/CreateComponentsContext'
import { useContext } from 'react'
import { contextCreated } from '../../../../React_js/AXIOS/src/Context/CreateComponentsContext'
import { useEffect } from 'react'

const fetchData = async (url) =>{
    return axios
    .get(url)
    .then((res) =>{
        return res.data
    })
    .catch((err)=>{
        return [null,err]
    })
}

export const ApiCall = () => {
    const {data, setData } = useContext(contextCreated);
    console.log('🚀 ~ data:', data);
    
    const api = 'https://fakestoreapi.com/products';
    useEffect(() =>{
        fetchData(api)
    .then((res) => setData(res))
    .catch((err) => console.warn(err))
    }, []);

  return (
    <>
      
    </>
  )
}


