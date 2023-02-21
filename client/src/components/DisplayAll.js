import React, {useEffect, useState} from 
'react';
import {Link} from "react-router-dom"
import axios from 'axios';





const DisplayAll = (props) => {

    const {productList, setProductList} = props;


    useEffect(() => {
        axios.get(("http://localhost:8000/api/products"))
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <div>
        <header>
            DisplayAll
        </header>
        {
            productList.map((product, index)=> (
                <div key={index}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link> 
                    <br/>
                    <p>{product.price}</p>
                    <br/>
                    <p>{product.description}</p>
                </div>
            ))
        }
        </div>

        )
}


export default DisplayAll;