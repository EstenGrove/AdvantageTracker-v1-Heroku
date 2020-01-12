import React from "react";
import styles from "../../css/vendor/BarGraph.module.scss";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LabelList
} from "recharts";

const BarGraph = props => {
  return (
    <div className={styles.BarGraph}>
      <ResponsiveContainer>
        <BarChart width={600} height={300} data={[""]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="bloodpressure" fill="#8884d8">
            <LabelList dataKey="bloodpressure" position="top" />
          </Bar>
          <Bar dataKey="over" fill="#82ca9d">
            <LabelList dataKey="over" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default BarGraph;
