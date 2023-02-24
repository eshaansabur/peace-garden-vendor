import { Image } from '@mui/icons-material';
import React from 'react';
import useProducts from '../../hooks/useProducts';
import OutOfStock from '../Product/OutOfStock';

const OutOfStocks = () => {
    const [products, setProducts] = useProducts();
    const handleDeleteProduct = (product) => {
      const remaining = products.filter(pd => pd._id !== product._id)
      console.log(remaining);
      const proceed = window.confirm("Are you sure you want to delete this product?");
      if(proceed){
        setProducts(remaining);
      }
  }
    return (
        <div className='col-9 col-md-9 col-lg-9'>
            <table class="table">
  <thead>
    <tr>
      <th scope="col-1"><Image></Image></th>
      <th scope="col-1">Name</th>
      <th scope="col-1">Price</th>
      <th scope="col-1">Discounted Price</th>
      <th scope="col-1">Quantity</th>
      <th scope="col-1">Min Amount</th>
      <th scope="col-1">Variant</th>
      <th scope="col-1">Shipping Time</th>
      <th scope="col-1">Category</th>
      <th scope="col-1">Date</th>
      <th scope="col-1">Edit/</th>
      <th scope="col-1">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        products.map(product => <OutOfStock key={product._id} product={product} handleDeleteProduct={handleDeleteProduct}></OutOfStock>)
    }
  </tbody>
</table>
        </div>
    );
};

export default OutOfStocks;