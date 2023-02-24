import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = (props) => {
    const {_id, size, img, name, price, discounted, quantity, minAmount, variant, shipping, category, date} = props.order;
    const {handleDeleteOrder} = props;
    const navigate = useNavigate();
    const seeOrderDetails = (id) =>{
        navigate(`/order/${id}`)
    }
    
    return (
        <tr>
            <th scope="row"><img className='' src={img} alt="" /></th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{discounted}</td>
            <td>{quantity}</td>
            <td>{quantity * discounted}</td>
            <td>{size}</td>
            <td>{shipping}</td>
            <td>{category[4]}</td>
            <td>{date}</td>
            <td><button onClick={()=>seeOrderDetails(_id,name, size, img, price, discounted, quantity)} className='btn btn-primary text-white'>See Details</button></td>
            <td><button onClick={()=>handleDeleteOrder(props.order)} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default Order;