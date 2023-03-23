import React from 'react';

const ShippingFees = () => {
    let shippingFees = 79;
    return (
        <div className="col-9 col-md-9 col-lg-9 mt-5 text-start ms-4">
            <form className='ml-5'>
                <div class="mb-3">
                <h3>Current Shipping Fees: {shippingFees}</h3>
                    <label for="exampleInputEmail1" class="form-label">Update Shipping Fees</label>
                    <input type="number" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn report-button">Change Shipping Fees</button>
            </form>
        </div>
    );
};

export default ShippingFees;