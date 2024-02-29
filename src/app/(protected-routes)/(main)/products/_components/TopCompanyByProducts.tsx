"use client";
import { useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const data = [
    {
        name: "VRX",
        units: 2000,
    },
    {
        name: "Essilor",
        units: 3000,
    },
    {
        name: "Ziess",
        units: 2000,
    },
    {
        name: "Prime",
        units: 2780,
    },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
            fontSize={11}
            fontWeight={600}
        >
            {data[index].name}
        </text>
    );
};

const TopCompanyByProducts = () => {
    const [chartData, setChartData] = useState(data);
    return (
        <div className="bg-white rounded-full border-[2px] border-[#EFEFF3]">
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={95}
                    fill="#8884d8"
                    dataKey="units"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                    {/* <Tooltip  /> */}
                </Pie>
            </PieChart>
        </div>
    );
};

export default TopCompanyByProducts;
