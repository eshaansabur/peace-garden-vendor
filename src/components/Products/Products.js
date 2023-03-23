import React from 'react';
import useProducts from '../../hooks/useProducts';
import ImageIcon from '@mui/icons-material/Image';
import Product from '../Product/Product';
const Products = () => {
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
        <div className='col-9 col-md-9 col-lg-9 mt-5 text-start ms-4'>
            <table class="table table-secondary table-striped table-hover table-bordered border-light">
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
        products.map(product => <Product key={product._id} product={product} handleDeleteProduct={handleDeleteProduct}></Product>)
    }
  </tbody>
</table>
        </div>
    );
};

export default Products;