import React, { useContext , useEffect } from 'react';
import axios from 'axios';
import { contextCreated } from '../Context/CreateComponentsContext';

const fetchData =async (url) => {
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

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {data.map((item)=>(
                <div key={item.id} style={{border:"1px solid #ccc",padding:"10px"}}>
                    <img src={item.image} alt="item.title" width="100" height="100" />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>

                </div>
            ))}

        </div>
        </>
    );
};