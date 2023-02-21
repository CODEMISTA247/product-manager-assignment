import React, {useState, useEffect} from "react";
import CreateProduct from "../components/createProduct";
import DisplayAll from "../components/DisplayAll";

// Display the form and All Products on one page 

const Main = (props) => {

    const [productList, setProductList] = useState([]);



    return(
        <div>
            <CreateProduct productList={productList} setProductList={setProductList}/> 
            <DisplayAll productList={productList} setProductList={setProductList} />
        </div>
    )
}


export default Main; 