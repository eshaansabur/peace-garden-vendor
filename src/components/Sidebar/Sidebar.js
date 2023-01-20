import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Sidebar.css';
import ProductionQuantityLimits from '@mui/icons-material/ProductionQuantityLimits';
const Sidebar = () => {
    return (
            <div className="col-3 col-md-3 col-lg-3 sidebar">
                <div className="sidebarmenu">
                    <div className="sidebarlist">
                    <ul className='itemslisting'>
                    <li className='item'>
                        <BarChartIcon></BarChartIcon> Dashboard
                    </li>
                    <li className='item'>
                        <BarChartIcon></BarChartIcon> Charts
                    </li>
                    <li className='item'>
                        <WidgetsIcon></WidgetsIcon> Widgets
                    </li>
                    <li className='item'>
                    <a class="products text-white" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><ProductionQuantityLimits></ProductionQuantityLimits> Products</a>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body dark">
                                <ul>
                                    <li>All Products</li>
                                    <li>Upload a Product</li>
                                    <li>Out Of Stock</li>
                                    <li>In Stock</li>
                                    <li>Upcoming</li>
                                    <li>Pre-order Products</li>
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
                                    <li>All Orders</li>
                                    <li>NewOrders</li>
                                    <li>Return Orders</li>
                                    <li>Cancel Orders</li>
                                    <li>Completed Orders</li>
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