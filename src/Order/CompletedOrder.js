import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompletedOrder = (props) => {
    const {_id, size, img, name, price, discounted, quantity, category,status, date} = props.order;
    const {handleDeleteOrder} = props;
    const navigate = useNavigate();
    const seeOrderDetails = (id) =>{
        navigate(`/completedorder/${id}`)
    }
    return (
        <tr>
        <th scope="row"><img className='img-size' src={img} alt="" /></th>
        <td>{name}</td>
        <td>{price}</td>
        <td>{discounted}</td>
        <td>{quantity}</td>
        <td>{quantity * discounted}</td>
        <td>{size}</td>
        <td>{date}</td>
        <td>{category[4]}</td>
        <td>{status}</td>
        <td><button onClick={()=>seeOrderDetails(_id,name, size, img, price, discounted, quantity)} className='btn report-button'>Details</button></td>
        <td><button onClick={()=>handleDeleteOrder(props.order)} className='btn btn-danger'>Delete</button></td>
    </tr>
    );
};

export default CompletedOrder;