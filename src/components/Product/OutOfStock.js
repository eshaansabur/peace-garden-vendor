import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const OutOfStock = (props) => {
    const {_id, img, name, price, discounted, quantity, minAmount, variant, shipping, category, date} = props.product;
    const navigate = useNavigate();
    const {handleDeleteProduct} = props;
    const seeProductDetails = (id) =>{
        navigate(`/outofstockproduct/${id}`)
    }
    const [products, setProducts] = useProducts();
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
            <td><button onClick={()=>seeProductDetails(_id)} className='btn btn-primary text-white'>Update Details</button></td>
            <td><button onClick={() =>handleDeleteProduct(props.product)} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default OutOfStock;