import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

  const studentMarksData = [
    { id: 1, name: 'Alice', math: 85, physics: 78, chemistry: 90 },
    { id: 2, name: 'Bob', math: 70, physics: 65, chemistry: 72 },
    { id: 3, name: 'Charlie', math: 90, physics: 82, chemistry: 88 },
    { id: 4, name: 'David', math: 65, physics: 60, chemistry: 68 },
    { id: 5, name: 'Emma', math: 75, physics: 70, chemistry: 78 },
    { id: 6, name: 'Frank', math: 80, physics: 75, chemistry: 82 },
    { id: 7, name: 'Grace', math: 95, physics: 88, chemistry: 92 },
    { id: 8, name: 'Hannah', math: 68, physics: 62, chemistry: 70 },
    { id: 9, name: 'Ian', math: 72, physics: 68, chemistry: 75 },
    { id: 10, name: 'Julia', math: 88, physics: 80, chemistry: 85 }
  ];
  

  return (
    <div>
      <LC width={400} height={400} data={studentMarksData}>
        <XAxis dataKey="name" />
        <YAxis/>
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics" stroke="#8884d8" />
        <Line dataKey="chemistry" stroke='red' />
      </LC>
      
    </div>
  );
};

export default LineChart;