import React, { useContext , useEffect } from 'react';
import axios from 'axios';
import { contextCreated } from '../Context/CreateComponentsContext';

const fetchData = (url) => {
    return axios 
        .get(url)
        .then((res) =>{
            return res.data;
        })
        .catch((err) =>{
            return [null, err];
        });
};

export const ApiCall = () =>{
    const { data, setData } = useContext(contextCreated);
    console.log('~data:', data);

    const api = 'https://fakestoreapi.com/products';
    useEffect(() =>{
        fetchData(api)
        .then((res) => setData(res))
        .catch((err) => console.warn(err));
    }, []);

    return(
        <>
        <h1>Api Call</h1>
        </>
    );
};