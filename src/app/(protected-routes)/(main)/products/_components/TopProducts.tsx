"use client";
import { useState } from "react";
import { Bar, BarChart, Rectangle, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
        name: "Page A",
        units: 2000,
    },
    {
        name: "Page B",
        units: 3000,
    },
    {
        name: "Page C",
        units: 2000,
    },
    {
        name: "Page D",
        units: 2780,
    },
    {
        name: "Page E",
        units: 1890,
    },
];

const TopProducts = () => {
    const [chartData, setChartData] = useState(data);
    return (
        <div className="bg-white p-2 rounded-2xl border-[2px] border-[#EFEFF3]">
            <BarChart width={300} height={150} data={chartData}>
                <XAxis dataKey="name" fontSize={12} />
                <YAxis hide />
                <Tooltip />
                <Bar
                    dataKey="units"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                    isAnimationActive={false}
                />
            </BarChart>
        </div>
    );
};

export default TopProducts;
