import React from 'react';

const ShippingFees = () => {
    let shippingFees = 79;
    return (
        <div className="col-9 col-md-9 col-lg-9">
        <div className='row'>
            <div className="col-12 col-md-12 col-lg-12 mt-5 mb-5">
            <p className="text-danger mt-5 mb-5">Current Shipping Fees: {shippingFees}</p>
            <p className="text-success">Update Shipping Fees: </p>
            <input type="number" name="" id="" />
            <br />
            <br />
            <button className='btn btn-success'>Update Shipping Fee</button>
            </div>
        </div>
        </div>
    );
};

export default ShippingFees;