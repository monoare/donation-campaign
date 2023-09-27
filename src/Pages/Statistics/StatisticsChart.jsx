import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#FF444A", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
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
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const StatisticsChart = ({ totalPrice }) => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setPrice(data));
  }, []);

  const grossPrice = price.reduce(
    (preValue, currentItem) =>
      parseFloat(preValue) + parseFloat(currentItem.price),
    0
  );

  const data = [
    { name: "Total Donation", value: grossPrice },
    { name: "Your Donation", value: totalPrice },
  ];

  const isMobile = window.innerWidth <= 450;

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={450}>
        <PieChart>
          <Pie
            className="text-base md:text-3xl md:font-semibold"
            data={data}
            cx={isMobile ? 150 : 200}
            cy={isMobile ? 150 : 200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={isMobile ? 100 : 150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend></Legend>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

StatisticsChart.propTypes = {
  totalPrice: PropTypes.array,
};
export default StatisticsChart;
