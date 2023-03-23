import { StackedLineChartTwoTone } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {ComposedChart,Area, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts';
import useChartData from '../../hooks/useChartData';
const ChartSummary = () => {
    const [chartData, setChartData] = useChartData();
    return (
        <div className='row mt-4 mb-4'>
            <h3>Chart Summary</h3>
            <div className="col-md-6 col-lg-6 col-12">
                <div className="card">
                    <div className="card-header report-header">
                        Line Chart
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Expense vs Revenue vs Profit</h5>
                        <LineChart width={450} height={400} data={chartData}>
                            <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                            <XAxis dataKey="name" />
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Line type="monotone" dataKey="expense" stroke="#fcba03" activeDot={{ r: 8 }} ></Line>
                            <Line type="monotone" dataKey="revenue" stroke="#8881a1" activeDot={{ r: 8 }} ></Line>
                            <Line type="monotone" dataKey="profit" stroke="#2913d1" activeDot={{ r: 8 }} ></Line>
                        </LineChart>
                    </div>
                    </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
            <div className="card">
                    <div className="card-header report-header">
                        Line Bar Area Composed Chart
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Expense vs Revenue vs Profit</h5>
                            <ComposedChart
                            width={450}
                            height={400}
                            data={chartData}>
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="profit" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="expense" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                            <Scatter dataKey="cnt" fill="red" />
                            </ComposedChart>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default ChartSummary;