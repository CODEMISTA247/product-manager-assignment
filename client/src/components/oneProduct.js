import React, {useEffect, useState} from 'react';
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from "axios"; 


// Get One Product 


const OneProduct = (props) => {

    const[oneProduct, setOneProduct] = useState({});
    
    const navigate = useNavigate();
    
    const {id} = useParams();

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}
        `)
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => console.log(err))

    }, [id])

    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => console.log(err))
    }



    return(
        <div>
            <h2>{oneProduct.title}</h2>
            <p>Price: {oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            {/* <button onClick={deleteFilter}>Delete</button> */}
            <Link to onClick={deleteFilter}>Delete</Link>
            <Link to={"/"}>Home</Link>

        </div>
    )
}


export default OneProduct;