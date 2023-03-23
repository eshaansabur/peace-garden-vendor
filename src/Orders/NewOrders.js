import { Image } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import NewOrder from '../Order/NewOrder';

const NewOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('neworders.json')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);
    const handleDeleteOrder = (order) => {
        const remaining = orders.filter(od => od._id !== order._id)
        console.log(remaining)
        setOrders(remaining);
    }
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5 text-start ms-4'>
            <table class="table table-secondary table-striped table-hover table-bordered border-light">
  <thead>
    <tr>
      <th scope="col-1"><Image></Image></th>
      <th scope="col-1">Buyer Name</th>
      <th scope="col-1">Price</th>
      <th scope="col-1">Discounted Price</th>
      <th scope="col-1">Quantity</th>
      <th scope="col-1">Total</th>
      <th scope="col-1">Variant</th>
      <th scope="col-1">Shipping Time</th>
      <th scope="col-1">Category</th>
      <th scope="col-1">Shipping Status</th>
      <th scope="col-1">Edit/</th>
      <th scope="col-1">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        orders.map(order => <NewOrder key={order._id} order={order} handleDeleteOrder={handleDeleteOrder}></NewOrder>)
    }
  </tbody>
</table>
        </div>
    );
};

export default NewOrders;