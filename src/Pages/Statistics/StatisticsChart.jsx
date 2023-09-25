import React, { PureComponent, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const StatisticsChart = ({ totalPrice }) => {
  const [price, setPrice] = useState([]);
  console.log(totalPrice);

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

  const percentOfTotalPrice = (totalPrice * 100) / grossPrice;
  console.log(percentOfTotalPrice);

  const data = [
    { name: "Your Donation", value: percentOfTotalPrice },
    { name: "Total Donation", value: 100 },
  ];

  return (
    <PieChart width={450} height={450}>
      <Pie
        data={data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={180}
        fill="#00C49F"
        label
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index === 0 ? "#00C49F" : "#FF444A"}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default StatisticsChart;
