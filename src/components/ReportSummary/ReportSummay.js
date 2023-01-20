import React, { useState } from 'react';
import NorthIcon from '@mui/icons-material/North';import SouthIcon from '@mui/icons-material/South';
const ReportSummay = () => {
    const [profitCount, setProfitCount] = useState(9.8);
    return (
        <div>
            <div className="row mt-5">
            <h3>Report Summary</h3>
                <div className="col-4 col-md-4 col-lg-4">
                <div class="card">
                <div class="card-header">
                    Total Profit
                </div>
                <div class="card-body">
                    <h5 class="card-title">Total Profit: $ {profitCount}k <NorthIcon className='text-success'></NorthIcon></h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button href="#" class="btn btn-primary">See Details</button>
                </div>
                </div> 
                </div>
                <div className="col-4 col-md-4 col-lg-4">
                <div class="card">
                <div class="card-header">
                    Total Sale
                </div>
                <div class="card-body">
                    <h5 class="card-title">Total Sale: $ {profitCount}k <NorthIcon className='text-success'></NorthIcon></h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button href="#" class="btn btn-primary">See Details</button>
                </div>
                </div>
                </div>
                <div className="col-4 col-md-4 col-lg-4">
                <div class="card">
                <div class="card-header">
                    Total Refund
                </div>
                <div class="card-body">
                    <h5 class="card-title">Total Refund: $ {profitCount}k <SouthIcon className='text-danger'></SouthIcon></h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button href="#" class="btn btn-primary">See Details</button>
                </div>
                </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-4 col-md-4 col-lg-4">
                <div class="card">
                <div class="card-header">
                    Total Loss
                </div>
                <div class="card-body">
                    <h5 class="card-title">Total Loss: $ {profitCount}k <SouthIcon className='text-danger'></SouthIcon></h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button href="#" class="btn btn-primary">See Details</button>
                </div>
                </div> 
                </div>
            </div>
        </div>
    );
};

export default ReportSummay;