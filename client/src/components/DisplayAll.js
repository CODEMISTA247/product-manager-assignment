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

    const deleteFilter = (idFromDelete) => {
        axios.delete(`http://localhost:8000/api/products/${idFromDelete}`)
            .then((res) => {
                console.log(res.data);
                setProductList(productList.filter((product, index)=> product._id !== idFromDelete))
            })
            .catch((err) => console.log(err))
    }

    


    return(
        <div>
        <h2>
            Products in Stock:
        </h2>
        {
            productList.map((product, index)=> (
                <div key={index}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link> 
                    <br/>
                    <p>{product.price}</p>
                    <br/>
                    <p>{product.description}</p>
                    <Link to={`/product/edit/${product._id}`} >Edit</Link>
{/*                     <button onClick={() =>deleteFilter(product._id)}>Delete</button> */}
                    <Link to onClick={() => deleteFilter(product._id)}>Delete</Link>
                </div>
            ))
        }
        </div>

        )
}


export default DisplayAll;