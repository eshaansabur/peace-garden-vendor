import React, { useState } from 'react';
import ChartSummary from '../ChartSummary/ChartSummary';
import ReportSummay from '../ReportSummary/ReportSummay';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <div className='col-9 col-md-9 col-lg-9'>
            <h2 className='mt-4'>Dashboard</h2>
            <ReportSummay></ReportSummay>
            <ChartSummary></ChartSummary>
        </div>
    );
};

export default Dashboard;