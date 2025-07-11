import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "CPU", value: 30 },
  { name: "RAM", value: 50 },
  { name: "Dysk", value: 20 },
];

const COLORS = ["#00bcd4", "#4caf50", "#ff5722"];

const PerformanceChart = () => {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
