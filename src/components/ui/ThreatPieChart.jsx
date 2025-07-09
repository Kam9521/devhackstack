import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const data = [
  { name: "Aktywne", value: 8 },
  { name: "Krytyczne", value: 3 },
  { name: "Phishing", value: 2 },
  { name: "Ransomware", value: 1 },
  { name: "Brute Force", value: 2 },
];
const COLORS = ["#3b82f6", "#ef4444", "#f59e0b", "#10b981", "#6366f1"];
const ThreatPieChart = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Podział zagrożeń</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
export default ThreatPieChart;
