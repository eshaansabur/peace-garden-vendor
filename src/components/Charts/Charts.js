import React, { useEffect } from 'react';
import {useState} from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line
  } from "recharts";
import useChartData from '../../hooks/useChartData';
const Charts = () => {
    const [chartData, setChartData] = useChartData();
    return (
        <div className="col-9 col-md-9 col-lg-9">
            <h2 className="mt-4 mb-4">Charts</h2>
            <div className="row">
                <div className="col-md-6 col-lg-6 col-12">
                <div className="card">
                    <div className="card-header report-header">
                        BarChart
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Expense vs Revenue</h5>
                        <BarChart width={450} height={400} data={chartData}>
                            <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                            <XAxis dataKey="name" />
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Bar dataKey="expense" fill="#8884d8"></Bar>
                            <Bar dataKey="revenue" fill="#8881a1"></Bar>
                        </BarChart>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                <div className="card">
                    <div className="card-header report-header">
                        BarChart
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Revenue vs Profit</h5>
                        <BarChart width={450} height={400} data={chartData}>
                            <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                            <XAxis dataKey="name" />
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Bar dataKey="revenue" fill="#a887c8"></Bar>
                            <Bar dataKey="profit" fill="#8831a9"></Bar>
                        </BarChart>
                    </div>
                </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
            <div className="col-md-6 col-lg-6 col-12">
                <div className="card">
                    <div className="card-header report-header">
                        LineChart
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Expense vs Revenue</h5>
                        <LineChart width={450} height={400} data={chartData}>
                            <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                            <XAxis dataKey="name" />
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Line type="monotone" dataKey="expense" stroke="#fcba03" activeDot={{ r: 8 }} ></Line>
                            <Line type="monotone" dataKey="revenue" stroke="#8881a1" activeDot={{ r: 8 }} ></Line>
                            
                        </LineChart>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
                <div className="card">
                    <div className="card-header report-header">
                        LineChart
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Expense vs Revenue</h5>
                        <LineChart width={450} height={400} data={chartData}>
                            <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                            <XAxis dataKey="name" />
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Line type="monotone" dataKey="revenue" stroke="#8881a1" activeDot={{ r: 8 }} ></Line>
                            <Line type="monotone" dataKey="profit" stroke="#2913d1" activeDot={{ r: 8 }} ></Line>
                        </LineChart>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
                <div className="card">
                    <div className="card-header report-header">
                        LineChart
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Expense vs Profit</h5>
                        <LineChart width={450} height={400} data={chartData}>
                            <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                            <XAxis dataKey="name" />
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Line type="monotone" dataKey="expense" stroke="#8881a1" activeDot={{ r: 8 }} ></Line>
                            <Line type="monotone" dataKey="profit" stroke="#2913d1" activeDot={{ r: 8 }} ></Line>
                        </LineChart>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Charts;