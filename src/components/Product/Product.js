import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Product = ({product}) => {
    const {_id, img, name, price, discounted, quantity, minAmount, variant, shipping, category, date} = product;
    const navigate = useNavigate();
    const seeProductDetails = (id) =>{
        navigate(`/product/${id}`)
    }
    const [products, setProducts] = useProducts();
    const deleteProduct = (id) => {
        const proceed = window.confirm("Are you sure that you want to delete this user?");
        if(proceed){
            const remaining = products.filter(product => product.id !== id);
            setProducts(remaining);
        }
    }
    return (
        <tr>
            <th scope="row"><img className='' src={img} alt="" /></th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{discounted}</td>
            <td>{quantity}</td>
            <td>{minAmount}</td>
            <td>{variant}</td>
            <td>{shipping}</td>
            <td>{category[5]}</td>
            <td>{date}</td>
            <td><button onClick={()=>seeProductDetails(_id)} className='btn btn-primary text-white'>See Details</button></td>
            <td><button onClick={() =>deleteProduct(_id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default Product;