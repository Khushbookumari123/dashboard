import "../Components/Overview.css";
import { useState } from "react";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// import { BarChart } from '@mui/x-charts/BarChart';
// import { dataset, valueFormatter } from '../dataset/weather';

// const chartSetting = {
//   yAxis: [
//     {
//       label: 'rainfall (mm)',
//       width: 60,
//     },
//   ],
//   height: 300,
// };

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
  { name: 'Aug', uv: 1890, pv: 4800 },
  { name: 'Sep', uv: 2390, pv: 3800 },
  { name: 'Oct', uv: 3490, pv: 4300 },
  { name: 'Nov', uv: 2390, pv: 3800 },
  { name: 'Dec', uv: 3490, pv: 4300 },
];


export default function Overview() {
   
  return (
  
    <div className="Overview-container">
            <h1>Overview</h1>
            <p style={{color:"gray"}}>Sales overview for the current month compared to the previous month.</p>

<ResponsiveContainer width="90%" style={{marginLeft:"15px",marginTop:"10px"}}  height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  


           
              {/* <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London', valueFormatter },
        { dataKey: 'paris', label: 'Paris', valueFormatter },
        { dataKey: 'newYork', label: 'New York', valueFormatter },
        { dataKey: 'seoul', label: 'Seoul', valueFormatter },
      ]}
      {...chartSetting}
    /> */}
    </div>
  );
}
