import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate, useParams  } from "react-router-dom";



const UpdateProduct = (props) => {
    const { id } = useParams(); // this process is identical to the one we used with our Details.js component
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate();
    // retrieve the current values for the product so we can fill in the form with what is in the db currently 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const UpdateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`,{
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/"); // Takes me back to main.js
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={UpdateProduct}>
                <div>
                    <label>Title:</label>
                    <input type="text" 
                    name="Title"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" 
                    name="Price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" 
                    name="Description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value)}}/>
                </div>

                <button type="submit" className="input">Create Product</button>

                </form>
        </div>
    )

}



export default UpdateProduct;