import React from 'react';
import Box from '@mui/material/Box';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const  data = [{
    name: 'January',
    value: 400
},
{
    name: 'February',
    value: 300
},
{
    name: 'March',
    value: 500
},
{
    name: 'April',
    value: 200
},
{
    name: 'May',
    value: 450
},
{
    name: 'June',
    value: 350
}];

const StrateChart = () => (
    <Box sx={{width: '100%'}}>
        <LineChart width={370} height= {300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    </Box>
);

export default StrateChart
