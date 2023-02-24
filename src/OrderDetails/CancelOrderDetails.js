import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CancelOrderDetails = () => {
    const {cancelOrderId} = useParams();
    console.log(cancelOrderId);
    const [order, setOrder] = useState({});
    const url = '';
    fetch(url)
    .then(res => res.json())
    .then(data => setOrder(data))
    return (
        <div className='col-9 col-md-9 col-lg-9'>
            <p className='fw-bold'>Order Details</p>
            <p>Product Id: {cancelOrderId}</p>
            <p>Buyer Name: </p>
            <p>Buyer Address: </p>
            <p>Phone Number: </p>
            <p>Price: </p>
            <p>Discounted Price: </p>
            <p>Quantity: </p>
            <p>Total: </p>
            <p>Variant: </p>
            <p>Category: </p>
            <p>Date: </p>
            <p>Shipping Date: </p>
            <p>Shipping Status: Onhold/ Shipped/ Cancelled</p>
            <button className='btn btn-primary'>Update</button>

        </div>
    );
};

export default CancelOrderDetails;