import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coupon = (props) => {
    const {_id, name, discount, code} = props.coupon;
    const {handleDeleteCoupon} = props;
    const navigate = useNavigate();
    const seeCouponDetails = (id) =>{
        navigate(`/seeCouponDetails/${id}`)
    }
    return (
        <tr>
        <td>{name}</td>
        <td>{code}</td>
        <td>{discount * 100}</td>
        <td className='px-3'><button onClick={()=>seeCouponDetails(_id)} className='btn report-button text-white'><small>Details</small></button></td>
        <td><button onClick={()=>handleDeleteCoupon(props.coupon)} className='btn btn-danger'><small>Delete</small></button></td>
        
    </tr>
    );
};

export default Coupon;