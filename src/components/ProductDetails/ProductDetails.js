import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId} = useParams();
    console.log(productId);
    const [product, setProduct] = useState({});
    const url = '';
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
    return (
        <div className='col-9 col-md-9 col-lg-9'>
            <p>Product Details</p>
            <p>Product Id: {productId}</p>
            <p>Name: </p>
            <p>Price: <input type="number" name="" id="" /></p>
            <button className='btn btn-primary'>Update</button>

        </div>
    );
};

export default ProductDetails;