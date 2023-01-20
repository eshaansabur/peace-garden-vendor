import React from 'react';
import useProducts from '../../hooks/useProducts';
import ImageIcon from '@mui/icons-material/Image';
import Product from '../Product/Product';
const Products = () => {
    const [products, setProducts] = useProducts();
    
    return (
        <div className='col-9 col-md-9 col-lg-9'>
            <table class="table">
  <thead>
    <tr>
      <th scope="col-1"><ImageIcon></ImageIcon></th>
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
        products.map(product => <Product key={product._id} product={product}></Product>)
    }
  </tbody>
</table>
        </div>
    );
};

export default Products;