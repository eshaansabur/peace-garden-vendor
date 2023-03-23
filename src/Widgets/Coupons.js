import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Coupon from './Coupon';

const Coupons = () => {
    const [coupons, setCoupons] = useState([]);
    useEffect(()=>{
        fetch('coupons.json')
        .then(res => res.json())
        .then(data => setCoupons(data))
    }, []);
    const handleDeleteCoupon = (coupon) => {
        const remaining = coupons.filter(us => us._id !== coupon._id)
        console.log(remaining)
        setCoupons(remaining);
    }
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5 text-start ms-4'>
            <h3>Current Coupons</h3>
            <table class="table table-secondary table-striped table-hover table-bordered border-light">
                <thead>
                    <tr>
                    <th scope="col">Coupon Name</th>
                    <th scope="col">Coupon Code</th>
                    <th scope="col">Coupon Percentage</th>
                    <th scope="col">Edit Coupon</th>
                    <th scope="col">Delete Coupon</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coupons.map(coupon => <Coupon key={coupon._id} coupon={coupon} handleDeleteCoupon={handleDeleteCoupon}></Coupon>)
                    }
                </tbody>
        </table>
        <h3>Add A New Coupon</h3>
        <form className='ml-5'>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Coupon Name</label>
                            <br />
                            <input type="text" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Coupon Code</label>
                            <br />
                            <input type="text" className="form-control w-50" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Coupon Percentage</label>
                            <br />
                            <input type="text" className="form-control w-50" id="exampleInputPassword1"/>
                        </div>
                        <br/>
                        <br/>
                        <button type="submit" className="btn report-button px-5 text-white">Add a New Coupon</button>
        </form>
        </div>
    );
};

export default Coupons;