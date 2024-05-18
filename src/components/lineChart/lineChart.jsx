// import PropTypes from "prop-types";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
    const studentMarks = [
        { studentId: 1, name: 'Alice', math: 85, physics: 90, chemistry: 88 },
        { studentId: 2, name: 'Bob', math: 78, physics: 85, chemistry: 80 },
        { studentId: 3, name: 'Charlie', math: 92, physics: 95, chemistry: 93 },
        { studentId: 4, name: 'David', math: 88, physics: 89, chemistry: 87 },
        { studentId: 5, name: 'Ella', math: 76, physics: 80, chemistry: 79 },
        { studentId: 6, name: 'Frank', math: 90, physics: 92, chemistry: 91 },
        { studentId: 7, name: 'Grace', math: 84, physics: 86, chemistry: 85 },
        { studentId: 8, name: 'Hannah', math: 91, physics: 94, chemistry: 92 },
        { studentId: 9, name: 'Ian', math: 87, physics: 88, chemistry: 89 },
        { studentId: 10, name: 'Jack', math: 79, physics: 81, chemistry: 80 }
      ];
      

  return (
    <div>
      <LChart width={400} height={400} data={studentMarks}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="math" stroke="#110a99" />
        <Line type="monotone" dataKey="physics" stroke="#900f0f" />
        <Line type="monotone" dataKey="chemistry" stroke="#068d18" />
      </LChart>
    </div>
  );
};

// LineChart.propTypes = {};

export default LineChart;
