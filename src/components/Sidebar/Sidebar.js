import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Sidebar.css';
import ProductionQuantityLimits from '@mui/icons-material/ProductionQuantityLimits';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
            <div className="col-3 col-md-3 col-lg-3 sidebar">
                <div className="sidebarmenu">
                    <div className="sidebarlist">
                    <ul className='itemslisting'>
                    <li className='item'>
                        <Link to='/dashboard'><BarChartIcon></BarChartIcon> Dashboard</Link>
                    </li>
                    <li className='item'>
                    <Link to='/charts'><BarChartIcon></BarChartIcon> Charts</Link>
                    </li>
                    <li className='item'>
                    <a class="products text-white" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"><WidgetsIcon></WidgetsIcon> Widgets</a>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body dark">
                                <ul>
                                   <Link to='/shippingfees'><li>Add/ Change Shipping Fees</li></Link>
                                    <Link to='/coupons'><li>Coupons</li></Link>
                                    <Link to='/paymentintegration'><li>Payment Integration</li></Link>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className='item'>
                    <a class="products text-white" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><ProductionQuantityLimits></ProductionQuantityLimits> Products</a>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body dark">
                                <ul>
                                <Link to='/products'><li>All Products</li></Link>
                                    <li>Upload a Product</li>
                                    <Link to='/outofstocks'><li>Out Of Stock</li></Link>
                                    <Link to='/instocks'><li>In Stock</li></Link>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className='item'>
                    <a class="products text-white" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"><ListAltIcon></ListAltIcon> Orders</a>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body dark">
                                <ul>
                                   <Link to='/orders'><li>All Orders</li></Link>
                                    <Link to='/neworders'><li>New Orders</li></Link>
                                    <Link to='/returnorders'><li>Return Orders</li></Link>
                                    <Link to='/cancelorders'><li>Cancel Orders</li></Link>
                                    <Link to='/completedorders'><li>Completed Orders</li></Link>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className='item'>Login/ Sign Up</li>
                    </ul>
                    </div>
                </div>
            </div>
    );
};

export default Sidebar;